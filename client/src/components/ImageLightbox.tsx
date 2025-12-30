type ImageLightboxProps = {
  image: string | null;
  onClose: () => void;
};

const ImageLightbox = ({ image, onClose }: ImageLightboxProps) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 transition-colors z-10"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <img
        src={image}
        alt="Full view"
        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default ImageLightbox;
