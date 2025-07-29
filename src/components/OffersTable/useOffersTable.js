import { useState, useCallback, useMemo } from 'react';
import { TABLE_VARIANTS } from './constants';

/**
 * Custom hook for managing offers table state and operations
 */
export const useOffersTable = (initialVariant = TABLE_VARIANTS.SIMPLE) => {
  const [variant, setVariant] = useState(initialVariant);
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Memoized table configuration
  const tableConfig = useMemo(() => ({
    variant,
    showFooter: variant === TABLE_VARIANTS.EXPANDABLE,
    showExpandButton: variant === TABLE_VARIANTS.EXPANDABLE,
    columnCount: variant === TABLE_VARIANTS.SIMPLE ? 8 : 11,
  }), [variant]);

  // Handle variant switching
  const switchVariant = useCallback((newVariant) => {
    console.log(`Switching from ${variant} to ${newVariant}`);
    setVariant(newVariant);
  }, [variant]);

  // Handle data export
  const exportData = useCallback((currentVariant, currentOffers) => {
    console.log('Starting export...', { 
      variant: currentVariant, 
      count: currentOffers.length
    });
    
    setIsLoading(true);
    
    // Simulate export process
    setTimeout(() => {
      const exportData = {
        variant: currentVariant,
        offers: currentOffers,
        exportedAt: new Date().toISOString(),
        summary: {
          totalOffers: currentOffers.length,
          totalValue: currentOffers.reduce((sum, offer) => sum + offer.totalOfferValue, 0),
          pendingActions: currentOffers.filter(offer => offer.action === 'Select').length
        }
      };
      
      console.log('Export completed:', exportData);
      setIsLoading(false);
    }, 800);
  }, []);

  // Handle action changes
  const updateAction = useCallback((rowId, action, currentVariant) => {
    console.log(`Action updated: ${action} for offer ${rowId}`);
    
    setOffers(prevOffers => 
      prevOffers.map(offer => 
        offer.id === rowId 
          ? { ...offer, action, updatedAt: new Date().toISOString() }
          : offer
      )
    );
  }, []);

  // Handle form submission
  const submitResponses = useCallback((currentVariant, currentOffers) => {
    const responses = currentOffers
      .filter(offer => offer.action && offer.action !== 'Select')
      .map(offer => ({
        offerId: offer.id,
        action: offer.action,
        company: offer.companyName,
        value: offer.totalOfferValue
      }));

    console.log('Submitting responses:', responses);
    
    setIsLoading(true);
    setTimeout(() => {
      console.log(`${responses.length} responses submitted successfully`);
      setIsLoading(false);
    }, 1200);
  }, []);

  // Load offers data
  const loadOffers = useCallback((offersData) => {
    console.log(`Loading ${offersData.length} offers`);
    setOffers(offersData);
  }, []);

  // Clear all data
  const clearOffers = useCallback(() => {
    setOffers([]);
  }, []);

  // Calculate statistics
  const statistics = useMemo(() => ({
    total: offers.length,
    totalValue: offers.reduce((sum, offer) => sum + offer.totalOfferValue, 0),
    pending: offers.filter(offer => offer.action === 'Select').length,
    accepted: offers.filter(offer => offer.action === 'Accept').length,
    rejected: offers.filter(offer => offer.action === 'Reject').length,
    countered: offers.filter(offer => offer.action === 'Counter').length,
  }), [offers]);

  return {
    // State
    variant,
    offers,
    isLoading,
    tableConfig,
    statistics,
    
    // Actions
    switchVariant,
    exportData,
    updateAction,
    submitResponses,
    loadOffers,
    clearOffers,
    
    // Direct setters (for advanced usage)
    setVariant,
    setOffers,
  };
};
