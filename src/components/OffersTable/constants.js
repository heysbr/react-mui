// Constants for styling and configuration
export const COLORS = {
  primary: '#0A1B2B',
  secondary: '#475467',
  success: '#10B981',
  error: '#EF4444',
  warning: '#FDB022',
  border: '#EAECF0',
  background: '#F9FAFB',
  expandedBg: '#F8F9FA',
  hover: 'rgba(234, 236, 240, 0.4)',
  offerChip: '#ECEDFE',
  offerChipText: '#5056D6',
  countChip: '#F4F3FF',
  statusBorder: '#FEC84B',
  accent: '#6366F1',
};

export const SIZES = {
  avatar: 40,
  rowHeight: 98,
  borderRadius: '8px',
  headerFontSize: '12px',
  bodyFontSize: '12px',
};

export const SAMPLE_EXPANDED_DATA = [
  {
    lineNumber: "001",
    product: "Apple iPhone 11 128GB A-1",
    availableQty: 200,
    askPrice: 756.00,
    offers: [
      { 
        company: "Phone Bid International", 
        companyInitials: "PBI", 
        rating: 4.5, 
        offer: 800.00, 
        percentage: 6.3, 
        qty: 10, 
        totalValue: 7000.00, 
        avgOffer: 795.00, 
        avgPercentage: 6.3, 
        action: "Select" 
      },
    ]
  },
  {
    lineNumber: "002", 
    product: "Apple iPhone 11 128GB A-2",
    availableQty: 200,
    askPrice: "Undefined",
    offers: [
      { 
        company: "Phone Bid International", 
        companyInitials: "PBI", 
        rating: 4.5, 
        offer: 800.00, 
        percentage: "-", 
        qty: 10, 
        totalValue: 7000.00, 
        avgOffer: 795.00, 
        avgPercentage: 6.3, 
        action: "Select" 
      },
      { 
        company: "CY Global", 
        companyInitials: "CY", 
        rating: 3.8, 
        offer: 700.00, 
        percentage: "-", 
        qty: 40, 
        totalValue: 28000.00, 
        avgOffer: 0, 
        avgPercentage: 12.3, 
        action: "Go to offer" 
      },
      { 
        company: "Device Trade Australia", 
        companyInitials: "D", 
        rating: 3.8, 
        offer: 810.00, 
        percentage: "-", 
        qty: 40, 
        totalValue: 32400.00, 
        avgOffer: 0, 
        avgPercentage: 15.3, 
        action: "Go to offer" 
      },
    ]
  },
  {
    lineNumber: "003",
    product: "Apple iPhone 11 128GB CPO", 
    availableQty: 200,
    askPrice: 756.00,
    offers: [
      { 
        company: "Phone Bid International", 
        companyInitials: "PBI", 
        rating: 4.5, 
        offer: 800.00, 
        percentage: 6.3, 
        qty: 10, 
        totalValue: 7000.00, 
        avgOffer: 795.00, 
        avgPercentage: 6.3, 
        action: "Accept" 
      },
    ]
  }
];
