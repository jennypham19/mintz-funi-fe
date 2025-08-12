export const resizeImage = (
        file: File,
        maxSize: number
    ): Promise<{ blob: Blob; previewUrl: string }> => {
        return new Promise((resolve, reject) => {
        const img = new Image();
        const reader = new FileReader();

        reader.onload = () => {
            if (typeof reader.result === "string") {
            img.src = reader.result;
            }
        };

        img.onload = () => {
            const canvas = document.createElement("canvas");
            let width = img.width;
            let height = img.height;

            if (width > height) {
            if (width > maxSize) {
                height = Math.round((height *= maxSize / width));
                width = maxSize;
            }
            } else {
            if (height > maxSize) {
                width = Math.round((width *= maxSize / height));
                height = maxSize;
            }
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext("2d");
            if (!ctx) return reject(new Error("Canvas context not found"));

            ctx.drawImage(img, 0, 0, width, height);

            canvas.toBlob(
            (blob) => {
                if (blob) {
                resolve({
                    blob,
                    previewUrl: URL.createObjectURL(blob),
                });
                } else {
                reject(new Error("Resize failed"));
                }
            },
            "image/jpeg",
            0.8
            );
        };

        reader.onerror = reject;
        reader.readAsDataURL(file);
        });
    };