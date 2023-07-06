declare module 'aos' {
    interface AosOptions {
      duration?: number;
    }
  
    interface Aos {
      init(options?: AosOptions): void;
    }
  
    const AOS: Aos;
  
    export default AOS;
  }
  