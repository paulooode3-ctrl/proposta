/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  ChevronDown
} from 'lucide-react';

const budgetItems = [
  { 
    id: 'domain', 
    title: 'Domínio & Identidade', 
    value: 150, 
    category: 'Infra',
    description: 'Registro do endereço web e configuração de e-mails profissionais.'
  },
  { 
    id: 'hosting', 
    title: 'Hospedagem Premium', 
    value: 150, 
    category: 'Infra',
    description: 'Servidor de alta performance com SSL e backup diário incluso.'
  },
  { 
    id: 'landing', 
    title: 'Criação de Site', 
    value: 350, 
    category: 'Design',
    description: 'Design exclusivo focado em conversão e experiência do usuário.'
  },
  { 
    id: 'software', 
    title: 'Sistemas & Backend', 
    value: 300, 
    category: 'Dev',
    description: 'Desenvolvimento de funcionalidades dinâmicas e painel administrativo.'
  }
];

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const total = budgetItems.reduce((acc, item) => acc + item.value, 0);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-zinc-800 antialiased overflow-x-hidden">
      <div className="noise" />
      
      <AnimatePresence mode="wait">
        {!showContent ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
          >
            <motion.div 
              initial={{ letterSpacing: "1.5em", opacity: 0 }}
              animate={{ letterSpacing: "0.6em", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[10px] font-black uppercase tracking-[0.6em] mb-6 text-white"
            >
              Nexus Company
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
              className="h-[1px] bg-zinc-800"
            />
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference">
              <div className="text-[10px] font-black tracking-[0.5em] uppercase text-white">
                Nexus Company
              </div>
              <div className="hidden md:block text-[9px] text-zinc-400 uppercase tracking-[0.4em] font-medium">
                Design & Strategy Studio
              </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 md:px-12">
              <div className="max-w-5xl w-full">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="h-px w-8 bg-zinc-700" />
                  <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-300 font-bold">
                    Proposta Comercial
                  </span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl sm:text-7xl md:text-[10rem] font-extralight tracking-tighter leading-[0.95] md:leading-[0.85] mb-12"
                >
                  O novo site <br />
                  <span className="italic font-serif text-zinc-400 pr-4">estratégico</span> <br className="md:hidden" />
                  de Camacho.
                </motion.h1>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="max-w-md"
                >
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light">
                    Transformando a presença digital do Camacho em uma experiência de alto impacto. 
                    Nexus Company apresenta a visão estratégica para 2026.
                  </p>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 flex flex-col items-center gap-3"
              >
                <span className="text-[8px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
              </motion.div>
            </section>

            {/* Budget Section */}
            <section className="max-w-6xl mx-auto px-6 md:px-12 py-32 md:py-48">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32">
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-32">
                    <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 font-black mb-6">
                      Investimento
                    </h2>
                    <p className="text-zinc-500 text-xs leading-relaxed max-w-[200px]">
                      Valores baseados em infraestrutura premium e design sob medida.
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-8 space-y-16 md:space-y-24">
                  {budgetItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="group"
                    >
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
                        <div className="flex items-start gap-6">
                          <span className="text-[10px] font-mono text-zinc-600 mt-2">0{index + 1}</span>
                          <div>
                            <h3 className="text-2xl md:text-4xl font-light tracking-tight mb-3 group-hover:text-white transition-colors duration-500">
                              {item.title}
                            </h3>
                            <p className="text-xs md:text-sm text-zinc-400 font-light max-w-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right w-full md:w-auto">
                          <span className="text-xl md:text-3xl font-extralight text-zinc-200">
                            R$ {item.value.toLocaleString('pt-BR')}
                          </span>
                        </div>
                      </div>
                      <div className="h-[1px] w-full bg-zinc-900 group-hover:bg-zinc-700 transition-all duration-700" />
                    </motion.div>
                  ))}

                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="pt-16 flex flex-col items-end"
                  >
                    <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold mb-4">Total Projetado</span>
                    <div className="text-6xl md:text-[9rem] font-black tracking-tighter text-white leading-none">
                      R$ {total.toLocaleString('pt-BR')}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center bg-white text-black px-6 md:px-12 py-32">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-center max-w-3xl"
              >
                <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 font-bold block mb-12">
                  Próximos Passos
                </span>
                <h2 className="text-4xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-16">
                  Pronto para o <br />
                  <span className="italic font-serif">próximo</span> nível?
                </h2>
                <motion.a
                  href="https://wa.me/5586994421646"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block px-12 md:px-20 py-6 md:py-8 bg-black text-white text-[10px] md:text-xs uppercase tracking-[0.5em] font-black rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-all"
                >
                  Iniciar Projeto
                </motion.a>
              </motion.div>

              {/* Refined Footer */}
              <div className="absolute bottom-10 w-full max-w-6xl px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.4em] text-zinc-400 font-bold">
                <div className="order-2 md:order-1">Nexus Company © 2026</div>
                <div className="flex gap-8 order-1 md:order-2">
                  <span>Camacho x Nexus</span>
                  <span className="text-zinc-300">Confidencial</span>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Accents */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-zinc-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-zinc-900/10 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}
