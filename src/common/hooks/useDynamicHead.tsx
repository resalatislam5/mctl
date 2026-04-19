import { useEffect } from 'react';

export const useDynamicHead = (title?: string, favicon?: string) => {
  useEffect(() => {
    if (title) document.title = title;

    if (favicon) {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;

      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }

      link.href = favicon;
    }
  }, [title, favicon]);
};
