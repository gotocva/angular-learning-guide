import {
  AfterContentInit, OnInit, Directive, ElementRef, EventEmitter, Inject, Input, OnDestroy, Output, PLATFORM_ID,
  Renderer2
} from "@angular/core";
import {isPlatformBrowser} from "@angular/common";

@Directive({
  selector: '[spark-image-loader]'
})
export class SparkImgLoaderDirective implements AfterContentInit, OnDestroy, OnInit {

  private nativeElement: HTMLElement | any;
    private cancelOnError: Function | any;
    private cancelOnLoad: Function | any;
    private largeImage: any;
    private originalSource: any;
    private imgLoaded = 0;
    acceptedSizes = ['sm','md', 'lg'];
    sizes = { sm: 80, md: 200, lg: 800};

    @Input() fallback: string = '';
    @Input() imgSize: string = '';
    @Output() emitOnError: EventEmitter<any> = new EventEmitter();

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
                private el: ElementRef,
                private renderer: Renderer2){
    }

    ngOnInit(): void {
      console.log(this.el.nativeElement)
      this.nativeElement = this.el.nativeElement;
      this.originalSource = this.nativeElement.src;
      console.log(this.originalSource);
      
      this.nativeElement.src = 'https://i.imgur.com/ffmMq6q.jpg';
    }

    ngAfterContentInit(){
        // if(this.acceptedSizes.indexOf(this.imgSize) < 0){
        //     console.log("please input a correct size ['sm','md', 'lg']");
        //     return;
        // }
        console.log(this.renderer);
        
        this.nativeElement.onload = this.imgOnLoad();
        
        // this.nativeElement.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Snake_River_%285mb%29.jpg/2560px-Snake_River_%285mb%29.jpg';
    }

    imgOnLoad() {
      if (this.imgLoaded == 0) {
        console.log('inside onload');
        this.nativeElement.src = this.originalSource;
        // this.imgLoaded = 1;
      } else {
        this.nativeElement.src = this.originalSource;
        setTimeout(() => {
          this.renderer.listen(this.nativeElement, 'load', this.imgOnLoad);
        }, 2000);
      }
    }
    registerEvents(){
        this.nativeElement = this.el.nativeElement;
        console.log(this.nativeElement.src);
        this.nativeElement.src = 'https://i.imgur.com/ffmMq6q.jpg'
        this.nativeElement.onload = () => {
          console.log('inside onload');
          this.nativeElement.src = this.nativeElement.src;
        }
        this.onError = this.onError.bind(this);
        this.onLoad = this.onLoad.bind(this);
        this.cancelOnError = this.renderer.listen(this.nativeElement, 'error', this.onError);
        this.cancelOnLoad = this.renderer.listen(this.nativeElement, 'load', this.onLoad);
    }

    loadLargeImage(src:any){
      console.log('loader:dir:', 'loadLargeImage');

        this.largeImage = new Image();
        this.largeImage.src = src;
        this.largeImage.onload = () => {
            //console.log('image loaded, ', this.largeImage.src);
            this.renderer.setAttribute(this.nativeElement, 'src', this.largeImage.src);
        }
    }

    private onError(){
        if(this.nativeElement.getAttribute('src') !== this.fallback){
            this.renderer.setAttribute(this.nativeElement, 'src', this.fallback);
            this.emitOnError.emit();
        }else{
            this.removeOnLoadEvent();
        }
    }

    private onLoad(){
      console.log('loader:dir:', 'onLoad');
      
      this.loadLargeImage(this.nativeElement.src);
    }

    private removeErrorEvent() {
        if (this.cancelOnError) {
            this.cancelOnError();
        }
    }

    private removeOnLoadEvent() {
        if (this.cancelOnLoad) {
            this.cancelOnLoad();
        }
    }

    ngOnDestroy(){
        this.removeErrorEvent();
        this.removeOnLoadEvent();
    }

}
