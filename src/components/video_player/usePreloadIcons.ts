import { useEffect } from 'react';
import { parseSvgString } from '@/utils/generic';

export function usePreloadIcons() {
  useEffect(() => {
    console.log('ICOOO');
    
    const icons = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none">
	<defs>
		<symbol id="vjs-icon-play" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
			<polygon points="6 3 20 12 6 21 6 3"/>
		</symbol>
		<symbol id="vjs-icon-pause" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
			<rect x="14" y="4" width="4" height="16" rx="1"/>
			<rect x="6" y="4" width="4" height="16" rx="1"/>
		</symbol>
		<symbol id="vjs-icon-volume1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
			<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/>
		</symbol>
		<symbol id="vjs-icon-volume2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
			<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/>
			<path d="M16 9a5 5 0 0 1 0 6"/>
		</symbol>
		<symbol id="vjs-icon-volume3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
			<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/>
			<path d="M16 9a5 5 0 0 1 0 6"/>
			<path d="M19.364 18.364a9 9 0 0 0 0-12.728"/>
		</symbol>
		<symbol id="vjs-icon-mute" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
			<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/>
			<line x1="22" x2="16" y1="9" y2="15"/>
			<line x1="16" x2="22" y1="9" y2="15"/>
		</symbol>
		<symbol id="vjs-like-red"  viewBox="0 0 24 24" fill="red" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart">
			<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
		</symbol>
		<symbol id ="vjs-like-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart">
			<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
		</symbol>
		<symbol id ="vjs-share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share-icon lucide-share">
			<path d="M12 2v13"/>
			<path d="m16 6-4-4-4 4"/>
			<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
		</symbol>
	</defs>
    </svg>`;

    // Avoid injecting again
    if (document.getElementById('videojs-custom-icons')) return;

    const svgEl = parseSvgString(icons);
    svgEl.id = 'videojs-custom-icons';
    document.body.insertBefore(svgEl, document.body.firstChild ?? null);
  }, []);
}
