const BASEDIR = process.cwd();
const { FOLDERS } = require(`${BASEDIR}/constants/folders.js`);
const { MODE } = require(`${FOLDERS.constantsDir}/blend_mode.js`);
const { NETWORK } = require(`${FOLDERS.constantsDir}/network.js`);

const network = NETWORK.eth;

const solanaMetadata = {
  symbol: "STB",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "YOUR_WEBSITE_URL_HERE", // Add your website URL here. Ex. https://thepeanutgalleryandco.co.za/
  creators: [
    {
      address: "YOUR_WALLET_ADDRESS_HERE", // Add your owner wallet address here. Ex. 0x5cE5D823f4bD8Ec610868fBa65832B479152C7E1
      share: 100,
    },
  ],
};


const generateIncompatibleTraits = () => {
  return {
    'shoes/prisoner': [
      `right_arm/sword`,
      `right_arm/pitchfork`,
      `right_arm/bag`,
      `right_arm/axe`,
    ],
    'bottom/sandbag': [
      `cape/dirty_rug`,
      `cape/legion`,
      `cape/robe`,
    ]
  }
}


// If you have selected Solana then the collection starts from 0 automatically

const generateBody = (skin) => {
  return [
    {
      name: `body/${skin}`,
      options: {
        bypassDNA: true
      }
    },
    {
      name: `body_type/${skin}`,
      options: {
        bypassDNA: true
      }
    },
    {
      name: `hair`,
      options: {
        bypassDNA: true
      }
    },
  ]
}

const generateAccessories = () => {
  return [
    {
      name: `right_arm`,
    },
    {
      name: `left_arm`,
    },
    {
      name: `bottom`,
    },
    {
      name: `shoes`,
    },
    {
      name: `top`,
    },
    {
      name: `cape`,
    },
    {
      name: `gloves`,
    },
    {
      name: `head`,
    },
  ]
}


const TOTAL_COUNT = 333
const CONFIGURATIONS = 5
const EDITION_SIZE = TOTAL_COUNT / CONFIGURATIONS

const layerConfigurations = [
  {
    growEditionSizeTo: EDITION_SIZE,
    layersOrder: [
      {
        name: `background`,
        options: {
          bypassDNA: true
        }
      },
      ...generateBody(1),
      ...generateAccessories(),
    ],
    incompatibleTraits: generateIncompatibleTraits()
  },
  {
    growEditionSizeTo: EDITION_SIZE * 2,
    layersOrder: [
      {
        name: `background`,
        options: {
          bypassDNA: true
        }
      },
      ...generateBody(2),
      ...generateAccessories()
    ],
    incompatibleTraits: generateIncompatibleTraits()
  },
  {
    growEditionSizeTo: EDITION_SIZE * 3,
    layersOrder: [
      {
        name: `background`,
        options: {
          bypassDNA: true
        }
      },
      ...generateBody(3),
      ...generateAccessories()
    ],
    incompatibleTraits: generateIncompatibleTraits()
  },
  {
    growEditionSizeTo: EDITION_SIZE * 4,
    layersOrder: [
      {
        name: `background`,
        options: {
          bypassDNA: true
        }
      },
      ...generateBody(4),
      ...generateAccessories()
    ],
    incompatibleTraits: generateIncompatibleTraits()
  },
  {
    growEditionSizeTo: EDITION_SIZE * 5,
    layersOrder: [
      {
        name: `background`,
        options: {
          bypassDNA: true
        }
      },
      ...generateBody(5),
      ...generateAccessories()
    ],
    incompatibleTraits: generateIncompatibleTraits()
  }
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 420,
  height: 420,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

// These are additional items that will be added to each NFT. You can remove them or add new ones as well if needed.
// Uncomment the lines if you would like to use these and update the details.
const extraMetadata = {
  //creator: "NFT_CREATOR_HERE", // Add the creator of the NFT collection here. Ex. The Peanut Gallery And Co
  //external_url: "YOUR_WEBSITE_URL_HERE"  // Add your website URL here. This will be added to each of your NFTs. Ex. https://thepeanutgalleryandco.co.za/
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 20,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 800,
  imageName: "preview.gif",
};

module.exports = {
  format,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
