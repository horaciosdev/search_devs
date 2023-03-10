import { Icon } from './interfaces/icon';

export const ICONS: Icon[] = [
  {
    name: 'default',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 16h1v1h-1v-1zM10 17h1v-1h-1v1zM12 17h1v-1h-1v1zM4 17h1v-1h-1v1zM6 17h1v-1h-1v1zM8 17h1v-1h-1v1zM14 17h1v-1h-1v1zM14 3h1v-1h-1v1zM14 5h1v-1h-1v1zM14 13h1v-1h-1v1zM14 7h1v-1h-1v1zM14 9h1v-1h-1v1zM14 15h1v-1h-1v1zM14 11h1v-1h-1v1zM14 0v1h1v-1h-1zM12 1h1v-1h-1v1zM6 1h1v-1h-1v1zM8 1h1v-1h-1v1zM10 1h1v-1h-1v1zM4 1h1v-1h-1v1zM2 1h1v-1h-1v1zM2 13h1v-1h-1v1zM2 15h1v-1h-1v1zM2 11h1v-1h-1v1zM2 3h1v-1h-1v1zM2 5h1v-1h-1v1zM2 7h1v-1h-1v1zM2 9h1v-1h-1v1z" />
          </svg>`,
  },
  {
    name: 'group',
    svg: `<svg viewBox="0 0 24 24" fill="none"
          stroke="currentColor"    
          height="1em"
          width="1em"    
          xmlns="http://www.w3.org/2000/svg">
          <path d="M20.7925 9.52352C21.5825 10.3136 21.5825 11.5944 20.7925 12.3845C20.0025 13.1745 18.7216 13.1745 17.9315 12.3845C17.1415 11.5944 17.1415 10.3136 17.9315 9.52352C18.7216 8.73349 20.0025 8.73349 20.7925 9.52352"/>
          <path d="M14.2026 5.91236C15.4191 7.12884 15.4191 9.10115 14.2026 10.3176C12.9861 11.5341 11.0138 11.5341 9.79731 10.3176C8.58083 9.10116 8.58083 7.12885 9.79731 5.91236C11.0138 4.69588 12.9861 4.69588 14.2026 5.91236"/>
          <path d="M6.06849 9.52352C6.85853 10.3136 6.85853 11.5944 6.06849 12.3845C5.27846 13.1745 3.99757 13.1745 3.20754 12.3845C2.41751 11.5944 2.41751 10.3136 3.20754 9.52352C3.99758 8.73349 5.27846 8.73349 6.06849 9.52352"/>
          <path d="M23 19V17.904C23 16.523 21.881 15.404 20.5 15.404H19.699"/>
          <path d="M1 19V17.904C1 16.523 2.119 15.404 3.5 15.404H4.301"/>
          <path d="M17.339 19V17.399C17.339 15.466 15.772 13.899 13.839 13.899H10.16C8.227 13.899 6.66 15.466 6.66 17.399V19"/>
          </svg>`,
  },
  {
    name: 'heart',
    svg: `<svg viewBox="0 0 24 24" fill="none" 
          stroke="currentColor"    
          height="1em"
          width="1em"    
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5091 5.97423L12 6.49115L11.4909 5.97415C10.5626 5.03109 9.29464 4.50003 7.97136 4.50003C6.64807 4.50003 5.38015 5.03109 4.45186 5.97415V5.97415C2.51609 7.9634 2.51609 11.1323 4.45186 13.1215L9.84451 18.5972C10.413 19.1747 11.1896 19.5 12.0001 19.5C12.8105 19.5 13.5871 19.1747 14.1556 18.5972L19.5482 13.1216C21.484 11.1324 21.484 7.9635 19.5482 5.97424V5.97424C18.6199 5.03115 17.352 4.50006 16.0287 4.50006C14.7053 4.50006 13.4374 5.03114 12.5091 5.97423Z"/>
          </svg>`,
  },
  {
    name: 'company',
    svg: `<svg viewBox="0 0 24 24" fill="none" 
          stroke="currentColor"    
          height="1em"
          width="1em"    
          xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.5V9"/>
          <path d="M9.5 12V10C9.5 9.44772 9.94772 9 10.5 9H13.5C14.0523 9 14.5 9.44772 14.5 10V12"/>
          <path d="M7 20.8997V13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13V20.8997"/>
          <rect x="3" y="3" width="18" height="18" rx="5"/>
          <path d="M9.5 15H14.5"/>
          <path d="M9.5 18H14.5"/>
          </svg>`,
  },
  {
    name: 'location',
    svg: `<svg viewBox="0 0 24 24" fill="none" 
          stroke="currentColor"    
          height="1em"
          width="1em"    
          xmlns="http://www.w3.org/2000/svg">
          <path d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z"/>
          <path d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z"/>
          </svg>`,
  },
  {
    name: 'email',
    svg: `<svg viewBox="0 0 24 24" fill="none" 
          stroke="currentColor"    
          height="1em"
          width="1em"    
          xmlns="http://www.w3.org/2000/svg">
          <path d="M21 9.5L13.5736 12.6775C12.5686 13.1075 11.4314 13.1075 10.4264 12.6775L3 9.5"/>
          <rect x="3" y="5" width="18" height="15" rx="4"/>
          </svg>`,
  },
  {
    name: 'link',
    svg: `<svg viewBox="0 0 24 24" fill="none" 
          stroke="currentColor"    
          height="1em"
          width="1em"    
          xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0147 18.015L11.4853 19.5444C9.54416 21.4856 6.39697 21.4856 4.45585 19.5444V19.5444C2.51473 17.6033 2.51473 14.4561 4.45585 12.515L6.44976 10.5211C7.38744 9.58343 8.65921 9.05664 9.98529 9.05664C11.3114 9.05664 12.5831 9.58343 13.5208 10.5211"/>
          <path d="M10.9853 5.98528L12.5147 4.45584C14.4558 2.51472 17.603 2.51472 19.5441 4.45584V4.45584C21.4853 6.39697 21.4853 9.54415 19.5441 11.4853L17.5502 13.4792C15.5976 15.4318 12.4318 15.4318 10.4792 13.4792"/>
          </svg>`,
  },
  {
    name: 'twitter',
    svg: `<svg viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"    
          height="1em"
          width="1em"    
          xmlns="http://www.w3.org/2000/svg">
          <path d="m 4.8050848,4.8559322 c 1.1663331,2.1387516 3.0306707,3.6811936 5.4152542,4.6016949 -0.04377,-3.7742277 4.40586,-6.6584445 8.084746,-2.9491525 l 2.771186,0.076271 -1.855932,2.7966101 C 19.268021,20.465846 7.1051079,23.426532 2.9491525,16.576271 L 5.6949153,15.661017 C 2.9265425,12.21521 2.423579,8.5050238 4.8050848,4.8559322 Z"/>
          </svg>`,
  },
  {
    name: 'star',
    svg: `<svg viewBox="0 0 24 24" fill="none" 
          stroke="currentColor"    
          height="1em"
          width="1em"    
          xmlns="http://www.w3.org/2000/svg">
          <path d="M12 17.235L6.179 20L7.388 13.88L3 9.392L9.179 8.621L12 3L14.821 8.621L21 9.392L16.612 13.88L17.821 20L12 17.235Z"/>
          </svg>`,
  },
  {
    name: 'search',
    svg: `<svg viewBox="0 0 24 24" fill="none" 
          stroke="currentColor"    
          height="1em"
          width="1em"    
          xmlns="http://www.w3.org/2000/svg">
          <path d="m 10.982422,2.9746094 a 8.0087214,8.0087214 0 0 0 -8.0078126,8.0078126 8.0087214,8.0087214 0 0 0 8.0078126,8.009766 8.0087214,8.0087214 0 0 0 5.564453,-2.251954 l 4.408203,4.408204 0.19336,-0.19336 -4.408204,-4.408203 a 8.0087214,8.0087214 0 0 0 2.251954,-5.564453 8.0087214,8.0087214 0 0 0 -8.009766,-8.0078126 z" />
          </svg>`,
  },
  {
    name: 'notfound',
    svg: `<svg viewBox="0 0 434 434" fill="currentColor"
          stroke="currentColor"    
          height="1em"
          width="1em"    
          xmlns="http://www.w3.org/2000/svg">          
          <path d="M170.666667,-7.10542736e-15 C264.770773,-7.10542736e-15 341.333333,76.56256 341.333333,170.666667 C341.333333,210.04032 327.799467,246.239573 305.3152,275.148373 L426.630187,396.463573 L396.463573,426.630187 L275.148373,305.314987 C246.239573,327.799467 210.04032,341.333333 170.666667,341.333333 C76.56256,341.333333 7.10542736e-15,264.770773 7.10542736e-15,170.666667 C7.10542736e-15,76.56256 76.56256,-7.10542736e-15 170.666667,-7.10542736e-15 Z M170.666667,42.6666667 C100.083413,42.6666667 42.6666667,100.083413 42.6666667,170.666667 C42.6666667,241.24992 100.083413,298.666667 170.666667,298.666667 C241.24992,298.666667 298.666667,241.24992 298.666667,170.666667 C298.666667,100.083413 241.24992,42.6666667 170.666667,42.6666667 Z M170.666667,202.666667 C188.339779,202.666667 202.666667,216.993555 202.666667,234.666667 C202.666667,252.339779 188.339779,266.666667 170.666667,266.666667 C152.993555,266.666667 138.666667,252.339779 138.666667,234.666667 C138.666667,216.993555 152.993555,202.666667 170.666667,202.666667 Z M192,64 L192,170.666667 L149.333333,170.666667 L149.333333,64 L192,64 Z"></path>          
          </svg>`,
  },
];
