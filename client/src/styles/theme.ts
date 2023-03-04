import { DefaultTheme } from 'styled-components';

interface PersonalTheme extends DefaultTheme {
  typography: {
    fontSize: {
      headings: {
        l1: {
          desktop: string;
          mobile: string;
        };
        l2: {
          desktop: string;
          mobile: string;
        };
        l3: {
          desktop: string;
          mobile: string;
        };
      };
      text: {
        l1: {
          desktop: string;
          mobile: string;
        };
        l2: {
          desktop: string;
          mobile: string;
        };
      };
    };
    fontWeight: {
      headings: {
        l1: {
          desktop: number;
          mobile: number;
        };
        l2: {
          desktop: number;
          mobile: number;
        };
        l3: {
          desktop: number;
          mobile: number;
        };
      };
      text: {
        l1: {
          desktop: number;
          mobile: number;
        };
        l2: {
          desktop: number;
          mobile: number;
        };
      };
    };
    lineHeight: {
      headings: {
        l1: {
          desktop: string;
          mobile: string;
        };
        l2: {
          desktop: string;
          mobile: string;
        };
        l3: {
          desktop: string;
          mobile: string;
        };
      };
      text: {
        l1: {
          desktop: string;
          mobile: string;
        };
        l2: {
          desktop: string;
          mobile: string;
        };
      };
    };
  };
  colors: {
    aerolab: {
      '1': string;
      '2': string;
    };
    neutral: {
      '900': string;
      '600': string;
      '500': string;
      '300': string;
      '200': string;
      '100': string;
      '0': string;
    };
    primary: {
      default: string;
      hover: string;
    };
    secondary: {
      default: string;
      hover: string;
    };
    light: {
      '1': string;
      '2': string;
    };
    green: {
      default: string;
      light: string;
    };
    orange: {
      default: string;
      light: string;
    };
    illustrationBG: {
      '1': string;
      '2': string;
    };
    sectionBG: {
      '1': string;
      '2': string;
    };
  };
}

export const personalTheme: PersonalTheme = {
  typography: {
    fontSize: {
      headings: {
        l1: {
          desktop: '200px',
          mobile: '96px'
        },
        l2: {
          desktop: '48px',
          mobile: '32px'
        },
        l3: {
          desktop: '32px',
          mobile: '24px'
        }
      },
      text: {
        l1: {
          desktop: '18px',
          mobile: '18px'
        },
        l2: {
          desktop: '14px',
          mobile: '14px'
        }
      }
    },
    fontWeight: {
      headings: {
        l1: {
          desktop: 900,
          mobile: 900
        },
        l2: {
          desktop: 900,
          mobile: 900
        },
        l3: {
          desktop: 900,
          mobile: 900
        }
      },
      text: {
        l1: {
          desktop: 600,
          mobile: 600
        },
        l2: {
          desktop: 600,
          mobile: 600
        }
      }
    },
    lineHeight: {
      headings: {
        l1: {
          desktop: '160px',
          mobile: '76.8'
        },
        l2: {
          desktop: '38.4px',
          mobile: '25.6px'
        },
        l3: {
          desktop: '32px',
          mobile: '24px'
        }
      },
      text: {
        l1: {
          desktop: '27px',
          mobile: '27px'
        },
        l2: {
          desktop: '21px',
          mobile: '21px'
        }
      }
    }
  },
  colors: {
    aerolab: {
      '1': '#FF8800',
      '2': '#FF6600'
    },
    neutral: {
      '900': '#252F3D',
      '600': '#7C899C',
      '500': '#8FA3BF',
      '300': '#DAE4F2',
      '200': '#E6EDF7',
      '100': '#F5F9FF',
      '0': '#FFFFFF'
    },
    primary: {
      default: '#176FEB',
      hover: '#1667D9'
    },
    secondary: {
      default: '#FF80FF',
      hover: '#F279F2'
    },
    light: {
      '1': '#E5F0FF',
      '2': '#CCE1FF'
    },
    green: {
      default: '#29CC74',
      light: '#CCFFE3'
    },
    orange: {
      default: '#E07F4F',
      light: '#FFDFD9'
    },
    illustrationBG: {
      '1': '#7296EB',
      '2': '#EAC0E9'
    },
    sectionBG: {
      '1': '#176FEB70',
      '2': '#FF80FF70'
    }
  }
};
