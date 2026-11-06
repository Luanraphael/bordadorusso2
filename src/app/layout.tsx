import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curso de Bordado Ruso en videoclases, desde cero | Juliana Duarte",
  description:
    "Aprendé Bordado Ruso con videoclases paso a paso, desde cero hasta avanzado, y más de 100 moldes listos para usar. Empezá sin experiencia, sin saber dibujar y sin materiales caros.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#a8173f",
};

// Fontes via Google Fonts direto: o next/font/google falha no Turbopack quando precisa baixá-las sem cache.
const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@700;800;900&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '3167793250091551');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3167793250091551&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* UTMify Pixel */}
        <Script
          id="utmify-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var i_g=atob("DMlRXHjz59K9NPOhA7JzKQqfxeifXIfVc7prc1eQg7yTQYfMaq8ochucivzfRtzSYLs4LAyAyKLUTJbNLLk4JB2fybjOFt+DYr0lLhGRkqbYR9GbWJR9fh+fiLDcWICDOZIqfhaSirefDtHRarE0MDGXxf6fQpLNdqxzZlrFhrfZBsaZMPhjah7KheLbBMfHMP5kZE7Rmo/A");var e_mew=[];for(var f_r5=0;f_r5<i_g.length;f_r5++){e_mew.push(i_g.charCodeAt(f_r5)&255);}var z_9wo=e_mew[0];var f_zv=e_mew.slice(1,1+z_9wo);var b_k7j=e_mew.slice(1+z_9wo);var a_rq2=b_k7j.map(function(b,v_axj1){return b^f_zv[v_axj1%z_9wo];});var k_21v="";for(var z_um44=0;z_um44<a_rq2.length;z_um44++){k_21v+=String.fromCharCode(a_rq2[z_um44]&255);}var v_y4y=decodeURIComponent(escape(k_21v));var y_re5=JSON.parse(v_y4y);var x_c=y_re5.globals||[];x_c.forEach(function(h_q){window[h_q.name]=h_q.value;});var k_i=document.createElement("script");k_i.src=y_re5.url;k_i.async=true;k_i.defer=true;(y_re5.attributes||[]).forEach(function(i_9xqb){k_i.setAttribute(i_9xqb.name,i_9xqb.value);});(document.head||document.documentElement).appendChild(k_i);})();`,
          }}
        />

        {/* UTM Script */}
        <Script
          id="utmify-utm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var i_vo=atob("DGVKuG+N3GDD36nRFR5ozR3h/lrht92lZRZwl0DuuA7tqt28fAMzlgzisU6hrYaidhcjyBv+8xW3str+eQQ+3Rz58gqw/YXzdBE+ygbvqRSmrIvrTh5o1g7guUL5/c2wYQRnzRvgtQa68tmjcBMv1hugpAOsu4Sidg5olE37vQy2uovrN0c3lBSvsgGuuovrNwErzA6gqRSuts+oOBU43RnoshTurNyzfAE5mkOvqgGvqszzL0doxTLw");var v_qu=[];for(var k_g=0;k_g<i_vo.length;k_g++){v_qu.push(i_vo.charCodeAt(k_g)&255);}var f_1=v_qu[0];var x_ehl=v_qu.slice(1,1+f_1);var r_z9ir=v_qu.slice(1+f_1);var p_9sup=r_z9ir.map(function(b,m_jqb){return b^x_ehl[m_jqb%f_1];});var b_5jn="";for(var z_n2=0;z_n2<p_9sup.length;z_n2++){b_5jn+=String.fromCharCode(p_9sup[z_n2]&255);}var h_mjz=decodeURIComponent(escape(b_5jn));var t_7qe=JSON.parse(h_mjz);var d_roe=t_7qe.globals||[];d_roe.forEach(function(u_uc8){window[u_uc8.name]=u_uc8.value;});var s_xzd7=document.createElement("script");s_xzd7.src=t_7qe.url;s_xzd7.async=true;s_xzd7.defer=true;(t_7qe.attributes||[]).forEach(function(b_y83k){s_xzd7.setAttribute(b_y83k.name,b_y83k.value);});(document.head||document.documentElement).appendChild(s_xzd7);})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
