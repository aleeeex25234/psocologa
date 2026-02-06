"use client";

import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";
import Script from "next/script";

export default function InstagramFeed() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // If the script is already there, we might need to trigger re-process
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    }, []);

    if (!mounted) {
        return (
            <div className="flex flex-col items-center mb-12 min-h-[400px]">
                <Instagram className="text-[#749B8F] mb-4 opacity-20" size={32} />
                <p className="text-gray-400 text-sm">Cargando Instagram...</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {/* Reel 1 */}
                <div className="w-full max-w-[326px]">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-permalink="https://www.instagram.com/reel/DRJrLwKDRnH/?utm_source=ig_embed&amp;utm_campaign=loading"
                        data-instgrm-version="14"
                        style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '320px', minWidth: '200px', padding: 0, width: '99.375%' }}
                    >
                        <div style={{ padding: '16px' }}>
                            <a href="https://www.instagram.com/reel/DRJrLwKDRnH/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank">
                                Ver publicación en Instagram
                            </a>
                        </div>
                    </blockquote>
                </div>

                {/* Reel 2 */}
                <div className="w-full max-w-[326px]">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-permalink="https://www.instagram.com/reel/DNnkq4fotH3/?utm_source=ig_embed&amp;utm_campaign=loading"
                        data-instgrm-version="14"
                        style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '320px', minWidth: '200px', padding: 0, width: '99.375%' }}
                    >
                        <div style={{ padding: '16px' }}>
                            <a href="https://www.instagram.com/reel/DNnkq4fotH3/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank">
                                Ver publicación en Instagram
                            </a>
                        </div>
                    </blockquote>
                </div>

                {/* Reel 3 */}
                <div className="w-full max-w-[326px]">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-permalink="https://www.instagram.com/reel/DG5jJo-I3Sk/?utm_source=ig_embed&amp;utm_campaign=loading"
                        data-instgrm-version="14"
                        style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '320px', minWidth: '200px', padding: 0, width: '99.375%' }}
                    >
                        <div style={{ padding: '16px' }}>
                            <a href="https://www.instagram.com/reel/DG5jJo-I3Sk/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank">
                                Ver publicación en Instagram
                            </a>
                        </div>
                    </blockquote>
                </div>
            </div>

            <Script
                src="https://www.instagram.com/embed.js"
                strategy="afterInteractive"
                onLoad={() => {
                    if (window.instgrm) {
                        window.instgrm.Embeds.process();
                    }
                }}
            />
        </div>
    );
}

declare global {
    interface Window {
        instgrm: any;
    }
}
