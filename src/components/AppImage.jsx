import React, { useState } from 'react';
import Icon from './AppIcon';

function AppImage({
  src,
  alt = "Image Name",
  className = "",
  fallbackIcon = "Shield",
  toolName = "",
  generateOfficialImage = false,
  ...props
}) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Generate official tool image URL from reliable sources only
  const getOfficialImageUrl = (toolName, githubUrl) => {
    if (!toolName) return null;
    
    const normalizedName = toolName.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Use only reliable image sources
    const imageSources = [
      // GitHub repository avatar (most reliable for GitHub tools)
      githubUrl ? `https://avatars.githubusercontent.com/${githubUrl.split('/')[3]}` : null,
      // Local fallback
      `/assets/images/no_image.png`
    ].filter(Boolean);
    
    return imageSources[0];
  };

  // Handle image loading states
  const handleImageLoad = () => {
    setIsLoading(false);
    setImageError(false);
  };

  const handleImageError = (e) => {
    setIsLoading(false);
    
    // If it's not already the fallback image, try the fallback
    if (!e.target.src.includes('no_image.png')) {
      e.target.src = "/assets/images/no_image.png";
      return;
    }
    
    // If even fallback fails, show icon
    setImageError(true);
  };

  // Use GitHub avatar for GitHub tools, otherwise use provided src
  const imageSource = generateOfficialImage && toolName && src?.includes('avatars.githubusercontent.com') ? 
    src : (src || "/assets/images/no_image.png");

  // If image failed and we have a fallback icon, show icon instead
  if (imageError && fallbackIcon) {
    return (
      <div className={`${className} flex items-center justify-center bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20`}>
        <Icon name={fallbackIcon} size={24} className="text-accent" />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <Icon name="Image" size={24} className="text-gray-400" />
        </div>
      )}
      <img
        src={imageSource}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        {...props}
      />
    </div>
  );
}

export default AppImage;
