'use client';

import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // Navegación suave (links #)
    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    const onClick = (e: MouseEvent) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute('href');
      if (!href) return;
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    anchors.forEach((a) => a.addEventListener('click', onClick));

    // Reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll('section').forEach((section) => observer.observe(section));

    return () => {
      anchors.forEach((a) => a.removeEventListener('click', onClick));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[color:var(--nimbus-navy)] text-white font-sans overflow-x-hidden">
      <div className="bg-grunge" />

      {/* Barra de Navegación */}
      <nav className="fixed w-full top-0 z-[100] px-6 py-4 flex justify-between items-center bg-[color:var(--nimbus-navy)]/80 backdrop-blur-md border-b-2 border-white/10">
        <div className="font-heading text-3xl font-black italic tracking-tighter">
          NIM<span className="text-red-600">BUS</span>.
        </div>

        <div className="hidden md:flex gap-12 items-center font-black uppercase text-sm tracking-widest">
          <a href="#hero" className="hover:text-red-600 transition">
            Inicio
          </a>

          {/* Menú Servicios con Submenú */}
          <div className="relative nav-item py-4 cursor-pointer">
            <span className="hover:text-red-600 transition flex items-center gap-1">Servicios ↓</span>
            <div className="submenu mt-2">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-heading text-xl mb-4 border-b-4 border-red-600 inline-block">Nuestras Soluciones</h4>
                  <ul className="space-y-3 font-bold text-sm">
                    <li className="hover:text-blue-700 transition">
                      <a href="/servicios/marketing-digital">/ MARKETING DIGITAL</a>
                    </li>
                    <li className="hover:text-blue-700 transition">
                      <a href="/servicios/relaciones-publicas">/ RELACIONES PÚBLICAS</a>
                    </li>
                    <li className="hover:text-blue-700 transition">
                      <a href="/servicios/street-marketing">/ STREET MARKETING</a>
                    </li>
                    <li className="hover:text-blue-700 transition">
                      <a href="/servicios/atl-display">/ MEDIOS ATL & DISPLAY</a>
                    </li>
                    <li className="hover:text-blue-700 transition">
                      <a href="/servicios/diseno-branding">/ DISEÑO & BRANDING</a>
                    </li>
                  </ul>
                </div>
                <div className="bg-zinc-200 paper-clip rotate-2 p-2 overflow-hidden aspect-video flex items-center justify-center">
                  <span className="text-xs font-black text-zinc-400 italic">IMAGEN_DEL_SERVICIO.JPG</span>
                </div>
              </div>
            </div>
          </div>

          <a href="/metodologia" className="hover:text-red-600 transition">
            Metodología
          </a>
          <a href="/clientes" className="hover:text-red-600 transition">
            Clientes
          </a>
          <a href="/contacto" className="btn-nimbus">
            Cotizar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative flex items-center justify-center pt-24 px-6 overflow-hidden">
        <div className="graphite-scratches" />
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="reveal">
            <div className="bg-red-600 text-white inline-block px-4 py-1 font-black mb-6 rotate-[-2deg] shadow-[4px_4px_0px_white]">
              AGENCIA DE SOLUCIONES INTEGRALES
            </div>
            <h1 className="text-6xl md:text-[8rem] font-black leading-[0.8] mb-8 font-heading">
              MARCAS <br />
              <span className="text-blue-600 italic">QUE SE</span> <br />
              <span className="relative">
                VIVEN.
                <span className="absolute -bottom-2 left-0 w-full h-8 bg-white/10 -z-10 skew-x-12" />
              </span>
            </h1>
            <p className="text-xl font-bold max-w-lg mb-8 leading-tight opacity-80 border-l-4 border-white pl-4">
              Nimbus crea comunicación con identidad, carácter y resultados reales para un mundo que no se detiene.
            </p>
            <div className="flex gap-4">
              <button className="btn-nimbus text-xl">Nuestra Estrategia</button>
              <button className="border-2 border-white px-8 py-4 font-black uppercase hover:bg-white hover:text-black transition">
                Portafolio
              </button>
            </div>
          </div>

          {/* Bento Collage Hero */}
          <div className="relative h-[500px] md:h-[600px] reveal" style={{ animationDelay: '0.3s' }}>
            <div className="absolute top-0 left-0 w-48 h-48 bg-blue-700 paper-clip-dark rotate-[-5deg] flex flex-col justify-center items-center">
              <span className="text-5xl font-black">+10</span>
              <span className="text-[10px] font-black">AÑOS EXP</span>
            </div>
            <div className="absolute top-20 right-0 w-64 h-80 bg-white p-2 paper-clip rotate-[3deg] z-20">
              <div className="w-full h-full bg-zinc-800 halftone flex items-center justify-center overflow-hidden">
                <div className="text-zinc-500 font-black italic text-4xl opacity-20">VISIÓN</div>
              </div>
            </div>
            <div className="absolute bottom-10 left-10 w-72 h-40 bg-red-600 paper-clip rotate-[-2deg] flex items-center justify-center p-6 z-30">
              <p className="text-white font-black text-2xl italic leading-none">NO SOMOS SOLO UNA AGENCIA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología Section (Interactivo) */}
      <section id="metodo" className="py-32 px-6 relative bg-black/50 border-y-2 border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-red-600 font-black tracking-[0.3em]">EL PROCESO</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mt-4 font-heading not-italic sm:italic leading-[0.95] pl-2 sm:pl-0">
                NUESTRA <span className="text-blue-600">METODOLOGÍA</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm font-bold opacity-60 italic">
              Pasa el cursor por cada paso para entender nuestro impacto estratégico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {[
              { n: '01', t: 'INVESTIGACIÓN', c: 'text-red-600', d: 'Recopilamos contexto, mercado y audiencia para entender el terreno de juego.' },
              { n: '02', t: 'ANÁLISIS', c: 'text-white', d: 'Interpretamos la información para encontrar patrones y oportunidades.' },
              { n: '03', t: 'DIAGNÓSTICO', c: 'text-white', d: 'Definimos qué está pasando realmente y por qué es relevante para tu marca.' },
              { n: '05', t: 'ACCIONES', c: 'text-white', d: 'Bajamos la estrategia a tácticas concretas y ejecutables.' },
              { n: '06', t: 'IMPLEMENTACIÓN', c: 'text-white', d: 'Ejecutamos, operamos y gestionamos con precisión milimétrica.' },
              { n: '07', t: 'RESULTADOS', c: 'text-blue-600', d: 'Medimos, evaluamos y justificamos el trabajo realizado.' },
            ].slice(0, 3).map((s) => (
              <div key={s.n} className="metodo-step bg-white/5 p-6 paper-clip-dark cursor-pointer">
                <div className={`text-4xl font-black mb-4 ${s.c}`}>{s.n}</div>
                <h4 className="font-black text-sm mb-4">{s.t}</h4>
                <div className="description text-xs text-zinc-400">{s.d}</div>
              </div>
            ))}

            <div className="metodo-step bg-red-600 p-6 shadow-[0px_0px_30px_rgba(255,0,0,0.3)] z-10 scale-110">
              <div className="text-4xl font-black mb-4 text-black italic">04</div>
              <h4 className="font-black text-sm mb-4 text-black">ESTRATEGIA</h4>
              <div className="description text-xs text-black font-bold">Decidimos el rumbo con base en el diagnóstico. Es el corazón de todo.</div>
            </div>

            {[
              { n: '05', t: 'ACCIONES', c: 'text-white', d: 'Bajamos la estrategia a tácticas concretas y ejecutables.' },
              { n: '06', t: 'IMPLEMENTACIÓN', c: 'text-white', d: 'Ejecutamos, operamos y gestionamos con precisión milimétrica.' },
              { n: '07', t: 'RESULTADOS', c: 'text-blue-600', d: 'Medimos, evaluamos y justificamos el trabajo realizado.' },
            ].map((s) => (
              <div key={s.n} className="metodo-step bg-white/5 p-6 paper-clip-dark cursor-pointer">
                <div className={`text-4xl font-black mb-4 ${s.c}`}>{s.n}</div>
                <h4 className="font-black text-sm mb-4">{s.t}</h4>
                <div className="description text-xs text-zinc-400">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes / Éxito */}
      <section id="exito" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white text-black p-12 paper-clip relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-64 h-full halftone opacity-10" />
            <div className="relative z-10">
              <h2 className="text-6xl font-black italic mb-4 font-heading">
                CASOS DE <span className="text-red-600">ÉXITO</span>
              </h2>
              <p className="max-w-xl font-bold text-zinc-600">
                Colaboramos con marcas líderes en Ecommerce, Retail, Salud, Gobierno y Entretenimiento. Transformamos presencia en PRESTIGIO.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Retail', 'Salud', 'Tech', 'Gobierno', 'Turismo'].map((label) => (
              <div
                key={label}
                className="p-8 border-2 border-white/10 hover:border-blue-600 transition flex items-center justify-center font-black italic text-xl uppercase opacity-40 hover:opacity-100"
              >
                {label}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[{
              tag: 'CAMPAÑA DIGITAL',
              title: 'PROYECTO ALPHA',
              shadow: '#0046ff',
              img:
                "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
            },
            {
              tag: 'R.P. & EVENTOS',
              title: 'LANZAMIENTO RETAIL',
              shadow: '#ff0000',
              img:
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
            },
            {
              tag: 'STREET MARKETING',
              title: 'GUERRILLA URBANA',
              shadow: 'white',
              img:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            }].map((card) => (
              <div
                key={card.title}
                className={`bg-zinc-900 aspect-video group relative overflow-hidden border-4 border-black shadow-[10px_10px_0px_${card.shadow}]`}
              >
                <div
                  className="absolute inset-0 bg-cover grayscale group-hover:grayscale-0 transition duration-500 opacity-50 group-hover:opacity-100"
                  style={{ backgroundImage: `url('${card.img}')` }}
                />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="bg-red-600 text-white px-2 py-1 text-[10px] font-black italic">{card.tag}</span>
                  <h4 className="text-white font-black text-xl">{card.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Footer */}
      <footer id="contacto" className="py-32 px-6 border-t-2 border-white/5 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-7xl font-black mb-12 italic leading-none font-heading">
              HABLEMOS <br />DE TU <span className="text-blue-600">IMPACTO.</span>
            </h2>
            <div className="space-y-6 font-bold text-xl uppercase tracking-tighter">
              <p className="flex items-center gap-4 hover:text-red-600 transition cursor-pointer">
                <span className="bg-white text-black px-2 py-1 text-xs">IG</span> @nimbus_mkt_rp
              </p>
              <p className="flex items-center gap-4 hover:text-red-600 transition cursor-pointer">
                <span className="bg-white text-black px-2 py-1 text-xs">LI</span> /nimbus-agencia
              </p>
              <p className="flex items-center gap-4 hover:text-red-600 transition cursor-pointer">
                <span className="bg-white text-black px-2 py-1 text-xs">EM</span> hola@nimbusmarketing.mx
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 border-4 border-white p-10 paper-clip shadow-[15px_15px_0px_#ff0000]">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="border-b-2 border-white/20">
                <label className="text-[10px] font-black opacity-50 uppercase tracking-widest">¿Quién eres?</label>
                <input
                  type="text"
                  placeholder="NOMBRE COMPLETO"
                  className="w-full bg-transparent p-2 focus:outline-none font-black text-xl uppercase text-white placeholder:text-white/10"
                />
              </div>
              <div className="border-b-2 border-white/20">
                <label className="text-[10px] font-black opacity-50 uppercase tracking-widest">¿Cómo te contactamos?</label>
                <input
                  type="email"
                  placeholder="E-MAIL DE NEGOCIOS"
                  className="w-full bg-transparent p-2 focus:outline-none font-black text-xl uppercase text-white placeholder:text-white/10"
                />
              </div>
              <div className="border-b-2 border-white/20">
                <label className="text-[10px] font-black opacity-50 uppercase tracking-widest">Tu proyecto</label>
                <textarea
                  placeholder="CUÉNTANOS EL RETO"
                  rows={2}
                  className="w-full bg-transparent p-2 focus:outline-none font-black text-xl uppercase text-white placeholder:text-white/10"
                />
              </div>
              <button className="btn-nimbus w-full text-2xl italic" type="submit">
                ENVIAR SEÑAL
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-32 flex justify-between text-[10px] font-black opacity-30 tracking-[0.3em]">
          <span>© 2026 NIMBUS MARKETING Y RP</span>
          <span>TODO ES POSIBLE</span>
        </div>
      </footer>
    </div>
  );
}
