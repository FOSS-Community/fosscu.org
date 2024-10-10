declare module 'react-lottie' {
    import { Component } from 'react';
  
    interface LottieProps {
      options: object;
      height?: number;
      width?: number;
      isStopped?: boolean;
      isPaused?: boolean;
      speed?: number;
      direction?: number;
      eventListeners?: object[];
      ariaRole?: string;
      ariaLabel?: string;
      isClickToPauseDisabled?: boolean;
      title?: string;
    }
  
    export default class Lottie extends Component<LottieProps> {}
  }
  