declare module "quill-image-resize-module-react" {
    import Quill from "quill";

    interface ImageResizeOptions {
        parchment?: any;
        modules?: string[];
    }

    const ImageResize: new (quill: Quill, options: ImageResizeOptions) => any;
    export default ImageResize;
}