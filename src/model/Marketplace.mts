
/**
 * Enum class MarketplaceValues.
 * @enum {}
 * @readonly
 */
export const MarketplaceValues = {
  "Australia": "https://www.amazon.com.au",
  "Belgium": "https://www.amazon.com.be",
  "Brazil": "https://www.amazon.com.br",
  "Canada": "https://www.amazon.ca",
  "Egypt": "https://www.amazon.eg",
  "France": "https://www.amazon.fr",
  "Germany": "https://www.amazon.de",
  "India": "https://www.amazon.in",
  "Ireland": "https://www.amazon.ie",
  "Italy": "https://www.amazon.it",
  "Japan": "https://www.amazon.co.jp",
  "Mexico": "https://www.amazon.com.mx",
  "Netherlands": "https://www.amazon.nl",
  "Poland": "https://www.amazon.pl",
  "Singapore": "https://www.amazon.sg",
  "Saudi Arabia": "https://www.amazon.sa",
  "Spain": "https://www.amazon.es",
  "Sweden": "https://www.amazon.se",
  "Turkey": "https://www.amazon.com.tr",
  "United Arab Emirates": "https://www.amazon.ae",
  "United Kingdom": "https://www.amazon.co.uk",
  "United States": "https://www.amazon.com",
}

/**
 * Enum class Marketplace.
 * @enum {}
 * @readonly
 */
export class Marketplace {
    [key: string]: any;
    
    public constructor() {
      const self = this;
      Object.keys(MarketplaceValues).forEach((key: string) => self[key] = MarketplaceValues[key]);
      Object.values(MarketplaceValues).forEach((value: string) => self[value] = value);
    }
  
    /**
     * Returns a <code>SortBy</code> enum value from a Javascript object name.
     * @param {Object} data The plain JavaScript object containing the name of the enum value.
     * @return {module:model/SortBy} The enum <code>SortBy</code> value.
     */
    public static constructFromObject(object: any) { return object; }
  };
  