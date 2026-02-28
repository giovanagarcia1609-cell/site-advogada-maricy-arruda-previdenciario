1: import { motion } from "motion/react";
2: import { 
3:   MessageCircle, 
4:   Scale, 
5:   ShieldCheck, 
6:   Clock, 
7:   Award, 
8:   CheckCircle2, 
9:   ChevronRight, 
10:   Phone, 
11:   MapPin, 
12:   Mail,
13:   Menu,
14:   X,
15:   HelpCircle,
16:   Star
17: } from "lucide-react";
18: import { useState, useEffect } from "react";
19: import ReactGA from "react-ga4";
20: 
21: const WHATSAPP_LINK = "https://wa.me/5517991118161?text=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20Previdenci%C3%A1rio";
22: 
23: const BASE_URL = import.meta.env.BASE_URL;
24: 
25: const services = [
26:   {
27:     title: "Aposentadoria por Idade",
28:     description: "Análise completa do seu tempo de contribuição e idade para garantir o melhor benefício possível.",
29:     icon: <Clock className="w-8 h-8 text-brand-secondary" />
30:   },
31:   {
32:     title: "BPC / LOAS",
33:     description: "Auxílio para idosos acima de 65 anos ou pessoas com deficiência em situação de vulnerabilidade.",
34:     icon: <ShieldCheck className="w-8 h-8 text-brand-secondary" />
35:   },
36:   {
37:     title: "Benefícios por Incapacidade",
38:     description: "Auxílio-doença e aposentadoria por invalidez para quem não pode mais trabalhar por motivos de saúde.",
39:     icon: <Scale className="w-8 h-8 text-brand-secondary" />
40:   },
41:   {
42:     title: "Planejamento Previdenciário",
43:     description: "Estudo detalhado para descobrir quando e com quanto você vai se aposentar, evitando prejuízos.",
44:     icon: <Award className="w-8 h-8 text-brand-secondary" />
45:   },
46:   {
47:     title: "Pensão por Morte",
48:     description: "Amparo jurídico para dependentes garantirem seus direitos após a perda de um ente querido.",
49:     icon: <CheckCircle2 className="w-8 h-8 text-brand-secondary" />
50:   },
51:   {
52:     title: "Revisão de Benefícios",
53:     description: "Análise de benefícios já concedidos para verificar se o valor está correto ou se cabe aumento.",
54:     icon: <Star className="w-8 h-8 text-brand-secondary" />
55:   }
56: ];
57: 
58: const testimonials = [
59:   {
60:     name: "Maria Silva",
61:     text: "A Dra. Maricy foi fundamental para conseguir minha aposentadoria. Depois de anos tentando sozinha, ela resolveu tudo em poucos meses.",
62:     rating: 5
63:   },
64:   {
65:     name: "João Pereira",
66:     text: "Excelente profissional. Muito atenciosa e explicou cada passo do processo do meu BPC. Recomendo a todos em Mirassol.",
67:     rating: 5
68:   },
69:   {
70:     name: "Ana Oliveira",
71:     text: "O planejamento previdenciário que ela fez me salvou de uma aposentadoria muito menor. Valeu cada centavo.",
72:     rating: 5
73:   }
74: ];
75: 
76: const faqs = [
77:   {
78:     question: "Quanto tempo demora para sair a aposentadoria?",
79:     answer: "O tempo varia conforme o tipo de benefício e a análise do INSS, mas com o acompanhamento jurídico adequado, evitamos erros que causam atrasos desnecessários."
80:   },
81:   {
82:     question: "Preciso ir até o escritório para ser atendido?",
83:     answer: "Atendemos de forma presencial em nosso escritório em Mirassol e também realizamos atendimentos online para sua maior comodidade."
84:   },
85:   {
86:     question: "Quais documentos são necessários para o BPC/LOAS?",
87:     answer: "Geralmente são necessários documentos pessoais, comprovante de residência, Cadastro Único atualizado e laudos médicos (no caso de deficiência)."
88:   }
89: ];
90: 
91: export default function App() {
92:   const [isMenuOpen, setIsMenuOpen] = useState(false);
93:   const [scrolled, setScrolled] = useState(false);
94: 
95:   useEffect(() => {
96:     const handleScroll = () => setScrolled(window.scrollY > 50);
97:     window.addEventListener("scroll", handleScroll);
98:     
99:     // Initialize GA4
100:     const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
101:     if (gaId) {
102:       ReactGA.initialize(gaId);
103:       ReactGA.send({ hitType: "pageview", page: window.location.pathname });
104:     }
105: 
106:     return () => window.removeEventListener("scroll", handleScroll);
107:   }, []);
108: 
109:   return (
110:     <div className="min-h-screen flex flex-col">
111:       {/* Header */}
112:       <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2 md:py-3" : "bg-transparent py-4 md:py-6"}`}>
113:         <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
114:           <div className="flex items-center gap-2 md:gap-3">
115:             <img src={`${BASE_URL}logo.jpg`} alt="Maricy Arruda Logo" className="h-10 md:h-12 w-auto" />
116:             <span className="text-lg md:text-xl font-serif font-bold text-brand-primary">
117:               Maricy Arruda
118:             </span>
119:           </div>
120: 
121:           <nav className="hidden md:flex items-center gap-8">
122:             <a href="#inicio" className="text-sm font-medium hover:text-brand-secondary transition-colors">Início</a>
123:             <a href="#servicos" className="text-sm font-medium hover:text-brand-secondary transition-colors">Serviços</a>
124:             <a href="#sobre" className="text-sm font-medium hover:text-brand-secondary transition-colors">Sobre</a>
125:             <a href="#localizacao" className="text-sm font-medium hover:text-brand-secondary transition-colors">Localização</a>
126:             <a href="#depoimentos" className="text-sm font-medium hover:text-brand-secondary transition-colors">Depoimentos</a>
127:             <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="relative bg-brand-accent text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-accent/90 transition-all shadow-lg flex items-center gap-2 group">
128:               <MessageCircle className="w-4 h-4" />
129:               Falar com Especialista
130:               {/* Speech bubble / Badge */}
131:               <span className="absolute -top-2 -right-1 flex h-5 w-5">
132:                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
133:                 <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-brand-accent text-[10px] font-black items-center justify-center shadow-sm">
134:                   1
135:                 </span>
136:               </span>
137:             </a>
138:           </nav>
139: 
140:           <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
141:             {isMenuOpen ? <X className="text-brand-primary" /> : <Menu className="text-brand-primary" />}
142:           </button>
143:         </div>
144: 
145:         {/* Mobile Menu */}
146:         {isMenuOpen && (
147:           <motion.div 
148:             initial={{ opacity: 0, y: -20 }}
149:             animate={{ opacity: 1, y: 0 }}
150:             className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
151:           >
152:             <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Início</a>
153:             <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Serviços</a>
154:             <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Sobre</a>
155:             <a href="#localizacao" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Localização</a>
156:             <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Depoimentos</a>
157:             <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="relative btn-whatsapp">
158:               <MessageCircle className="w-5 h-5" /> WhatsApp
159:               <span className="absolute -top-1 -right-1 flex h-5 w-5">
160:                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
161:                 <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-brand-accent text-[10px] font-black items-center justify-center shadow-sm">
162:                   1
163:                 </span>
164:               </span>
165:             </a>
166:           </motion.div>
167:         )}
168:       </header>
169: 
170:       <main>
171:         {/* Hero Section */}
172:         <section id="inicio" className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
173:           <div className="absolute inset-0 -z-10">
174:             <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/5 skew-x-12 transform translate-x-20" />
175:           </div>
176:           
177:           <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
178:             <motion.div
179:               initial={{ opacity: 0, x: -30 }}
180:               whileInView={{ opacity: 1, x: 0 }}
181:               viewport={{ once: true }}
182:               transition={{ duration: 0.6 }}
183:             >
184:               <div className="inline-flex items-center gap-2 bg-brand-secondary/10 text-brand-secondary px-4 py-1 rounded-full text-xs md:sm font-bold mb-6">
185:                 <Award className="w-4 h-4" /> +20 Anos de Experiência
186:               </div>
187:               <h1 className="text-4xl md:text-7xl font-serif font-bold text-brand-primary leading-tight mb-6">
188:                 Sua <span className="text-brand-secondary">Aposentadoria</span> em Mirassol com Segurança
189:               </h1>
190:               <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
191:                 Especialista em Direito Previdenciário em Mirassol e Região. Lutamos pelo seu benefício do INSS com agilidade e transparência.
192:               </p>
193:               <div className="flex flex-col sm:flex-row gap-4">
194:                 <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp text-lg">
195:                   <MessageCircle className="w-6 h-6" /> Falar com Especialista<span className="hidden sm:inline"> agora</span>
196:                 </a>
197:                 <a href="#servicos" className="flex items-center justify-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all">
198:                   Ver nossos serviços <ChevronRight className="w-5 h-5" />
199:                 </a>
200:               </div>
201:               
202:               <div className="mt-12 flex items-center gap-4">
203:                 <div className="text-sm">
204:                   <div className="flex text-yellow-400 mb-1">
205:                     {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
206:                   </div>
207:                   <p className="text-slate-500 font-medium">+500 clientes satisfeitos em Mirassol</p>
208:                 </div>
209:               </div>
210:             </motion.div>
211: 
212:             <motion.div
213:               initial={{ opacity: 0, scale: 0.9 }}
214:               whileInView={{ opacity: 1, scale: 1 }}
215:               viewport={{ once: true }}
216:               transition={{ duration: 0.6, delay: 0.2 }}
217:               className="relative"
218:             >
219:               <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
220:                 <img 
221:                   src={`${BASE_URL}hero.jpg`} 
222:                   alt="Dra. Maricy Arruda" 
223:                   className="w-full h-auto object-cover aspect-[4/5]"
224:                   referrerPolicy="no-referrer"
225:                 />
226:               </div>
227:               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
228:                 <p className="text-brand-primary font-serif font-bold text-lg mb-1">Dra. Maricy Arruda</p>
229:                 <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">OAB/SP 194.672</p>
230:               </div>
231:               <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-secondary/20 rounded-full blur-3xl -z-10" />
232:             </motion.div>
233:           </div>
234:         </section>
235: 
236:         {/* Stats Section */}
237:         <section className="bg-brand-primary py-12">
238:           <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
239:             <div>
240:               <p className="text-4xl font-serif font-bold text-white mb-1">20+</p>
241:               <p className="text-brand-secondary text-sm font-bold uppercase tracking-widest">Anos de Atuação</p>
242:             </div>
243:             <div>
244:               <p className="text-4xl font-serif font-bold text-white mb-1">1k+</p>
245:               <p className="text-brand-secondary text-sm font-bold uppercase tracking-widest">Processos Ativos</p>
246:             </div>
247:             <div>
248:               <p className="text-4xl font-serif font-bold text-white mb-1">98%</p>
249:               <p className="text-brand-secondary text-sm font-bold uppercase tracking-widest">Taxa de Sucesso</p>
250:             </div>
251:             <div>
252:               <p className="text-4xl font-serif font-bold text-white mb-1">Rápido</p>
253:               <p className="text-brand-secondary text-sm font-bold uppercase tracking-widest">Atendimento</p>
254:             </div>
255:           </div>
256:         </section>
257: 
258:         {/* Services Section */}
259:         <section id="servicos" className="py-24 bg-white">
260:           <div className="max-w-7xl mx-auto px-6">
261:             <div className="text-center max-w-3xl mx-auto mb-16">
262:               <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6">Especialista em Direito Previdenciário em Mirassol</h2>
263:               <p className="text-lg text-slate-600">
264:                 Oferecemos assessoria jurídica completa para garantir seus direitos junto ao INSS. Atendimento especializado em Mirassol e toda a região.
265:               </p>
266:             </div>
267: 
268:             <div className="grid md:grid-cols-3 gap-8">
269:               {services.map((service, index) => (
270:                 <motion.div
271:                   key={index}
272:                   initial={{ opacity: 0, y: 20 }}
273:                   whileInView={{ opacity: 1, y: 0 }}
274:                   viewport={{ once: true }}
275:                   transition={{ delay: index * 0.1 }}
276:                   whileHover={{ y: -10 }}
277:                   className="card-service"
278:                 >
279:                   <div className="mb-6">{service.icon}</div>
280:                   <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">{service.title}</h3>
281:                   <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
282:                   <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-brand-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all">
283:                     Consultar agora <ChevronRight className="w-4 h-4" />
284:                   </a>
285:                 </motion.div>
286:               ))}
287:             </div>
288:           </div>
289:         </section>
290: 
291:         {/* CTA Section */}
292:         <section className="py-20 bg-brand-light">
293:           <div className="max-w-5xl mx-auto px-6">
294:             <div className="bg-brand-primary rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
295:               <div className="relative z-10">
300:                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
301:                   Não perca mais tempo lutando sozinho contra o INSS
302:                 </h2>
303:                 <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
304:                   Muitas pessoas perdem dinheiro por não conhecerem seus direitos. Deixe um especialista cuidar do seu futuro.
305:                 </p>
306:                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
307:                   <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp text-lg px-10">
308:                     <MessageCircle className="w-6 h-6" /> Falar com Especialista
309:                   </a>
310:                 </div>
311:               </div>
312:               <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
313:                 <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
314:                 <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
315:               </div>
316:             </div>
317:           </div>
318:         </section>
319: 
320:         {/* About Section */}
321:         <section id="sobre" className="py-24 bg-white">
322:           <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
323:             <div className="order-2 md:order-1">
324:               <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-8">Dra. Maricy Arruda</h2>
325:               <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
326:                 <p>
327:                   Com mais de duas décadas dedicadas exclusivamente ao Direito Previdenciário, construí uma carreira pautada na ética, no compromisso e na busca incessante pelos direitos dos meus clientes.
328:                 </p>
329:                 <p>
330:                   Atuamos em casos de Aposentadoria por Idade, Tempo de Contribuição, Especial, além de pedidos de BPC/LOAS e revisões de benefícios. Se você procura por um advogado previdenciário em Mirassol, está no lugar certo.
331:                 </p>
332:                 <p>
333:                   Nosso escritório em Mirassol é referência em agilidade e atendimento humanizado, tratando cada caso com a atenção e o detalhismo que o INSS exige para a concessão do seu benefício.
334:                 </p>
335:               </div>
336:               <div className="mt-10 grid grid-cols-2 gap-6">
337:                 <div className="flex items-start gap-3">
338:                   <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0" />
339:                   <span className="font-medium">Especialista em Direito Previdenciário</span>
340:                 </div>
341:                 <div className="flex items-start gap-3">
342:                   <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0" />
343:                   <span className="font-medium">Atendimento em todo o Brasil (Online)</span>
344:                 </div>
345:               </div>
346:             </div>
347:             <div className="order-1 md:order-2">
348:               <div className="relative">
349:                 <img 
350:                   src={`${BASE_URL}hero.jpg`} 
351:                   alt="Dra. Maricy Arruda" 
352:                   className="rounded-3xl shadow-xl w-full h-auto object-cover aspect-[4/5] object-top"
353:                   referrerPolicy="no-referrer"
354:                   loading="lazy"
355:                 />
356:                 <div className="absolute -bottom-10 -right-10 hidden lg:block">
357:                   <div className="bg-brand-secondary p-8 rounded-2xl text-white shadow-xl">
358:                     <p className="text-4xl font-serif font-bold mb-1">20+</p>
359:                     <p className="text-sm font-bold uppercase tracking-widest opacity-80">Anos de História</p>
360:                   </div>
361:                 </div>
362:               </div>
363:             </div>
364:           </div>
365:         </section>
366: 
367:         {/* Location Section */}
368:         <section id="localizacao" className="py-24 bg-brand-light">
369:           <div className="max-w-7xl mx-auto px-6">
370:             <div className="grid md:grid-cols-2 gap-16 items-center">
371:               <div>
372:                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-8">Onde Estamos</h2>
373:                 <p className="text-lg text-slate-600 mb-8 leading-relaxed">
374:                   Nosso escritório está estrategicamente localizado no coração de Mirassol, oferecendo um ambiente acolhedor e profissional para atender você e sua família com todo o conforto necessário.
375:                 </p>
376:                 
377:                 <div className="space-y-6 mb-10">
378:                   <div className="flex items-start gap-4">
379:                     <div className="bg-brand-primary/10 p-3 rounded-lg">
380:                       <MapPin className="w-6 h-6 text-brand-primary" />
381:                     </div>
382:                     <div>
383:                       <p className="font-bold text-brand-primary">Endereço</p>
384:                       <p className="text-slate-600">Rua Quintino Bocaiúva, 2125 - Centro, Mirassol/SP</p>
385:                     </div>
386:                   </div>
387:                   <div className="flex items-start gap-4">
388:                     <div className="bg-brand-primary/10 p-3 rounded-lg">
389:                       <Clock className="w-6 h-6 text-brand-primary" />
390:                     </div>
391:                     <div>
392:                       <p className="font-bold text-brand-primary">Horário de Atendimento</p>
393:                       <p className="text-slate-600">Segunda a Sexta: 08:00 às 18:00</p>
394:                     </div>
395:                   </div>
396:                 </div>
397: 
398:                 <div className="grid grid-cols-2 gap-4">
399:                   {[2, 3, 4, 5].map((i) => (
400:                     <motion.div 
401:                       key={i}
402:                       whileHover={{ scale: 1.05 }}
403:                       className="rounded-xl overflow-hidden shadow-md h-40"
404:                     >
405:                       <img 
406:                         src={`${BASE_URL}interno-${i}.jpeg`} 
407:                         alt={`Escritório de Advocacia Dra. Maricy Arruda em Mirassol - Sala de Atendimento ${i}`} 
408:                         className="w-full h-full object-cover"
409:                         referrerPolicy="no-referrer"
410:                         loading="lazy"
411:                       />
412:                     </motion.div>
413:                   ))}
414:                 </div>
415:               </div>
416: 
417:               <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
418:                 <iframe 
419:                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.876543210!2d-49.512345678!3d-20.812345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad123456789%3A0x1234567890abcdef!2sMirassol%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
420:                   width="100%" 
421:                   height="100%" 
422:                   style={{ border: 0 }} 
423:                   allowFullScreen 
424:                   loading="lazy" 
425:                   referrerPolicy="no-referrer-when-downgrade"
426:                 ></iframe>
427:               </div>
428:             </div>
429:           </div>
430:         </section>
431: 
432:         {/* Testimonials Section */}
433:         <section id="depoimentos" className="py-24 bg-brand-light">
434:           <div className="max-w-7xl mx-auto px-6">
435:             <div className="text-center mb-16">
436:               <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6">O que nossos clientes dizem</h2>
437:               <div className="flex justify-center gap-1 text-yellow-400">
438:                 {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-6 h-6 fill-current" />)}
439:               </div>
440:             </div>
441: 
442:             <div className="grid md:grid-cols-3 gap-8">
443:               {testimonials.map((t, i) => (
444:                 <motion.div 
445:                   key={i} 
446:                   initial={{ opacity: 0, scale: 0.9 }}
447:                   whileInView={{ opacity: 1, scale: 1 }}
448:                   viewport={{ once: true }}
449:                   transition={{ delay: i * 0.1 }}
450:                   className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
451:                 >
452:                   <div className="flex text-yellow-400 mb-4">
453:                     {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
454:                   </div>
455:                   <p className="text-slate-600 italic mb-6">"{t.text}"</p>
456:                   <div className="flex items-center gap-3">
457:                     <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-brand-primary">
458:                       {t.name[0]}
459:                     </div>
460:                     <span className="font-bold text-brand-primary">{t.name}</span>
461:                   </div>
462:                 </motion.div>
463:               ))}
464:             </div>
465:           </div>
466:         </section>
467: 
468:         {/* FAQ Section */}
469:         <section className="py-24 bg-white">
470:           <div className="max-w-3xl mx-auto px-6">
471:             <h2 className="text-4xl font-serif font-bold text-brand-primary text-center mb-12">Dúvidas Frequentes</h2>
472:             <div className="space-y-6">
473:               {faqs.map((faq, i) => (
474:                 <div key={i} className="border-b border-slate-200 pb-6">
475:                   <h3 className="text-xl font-serif font-bold text-brand-primary mb-3 flex items-center gap-3">
476:                     <HelpCircle className="w-5 h-5 text-brand-secondary" />
477:                     {faq.question}
478:                   </h3>
479:                   <p className="text-slate-600 leading-relaxed pl-8">{faq.answer}</p>
480:                 </div>
481:               ))}
482:             </div>
483:             <div className="mt-12 text-center">
484:               <p className="text-slate-500 mb-6">Ainda tem dúvidas?</p>
485:               <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary inline-flex">
486:                 Falar com a Dra. Maricy
487:               </a>
488:             </div>
489:           </div>
490:         </section>
491:       </main>
492: 
493:       {/* Footer */}
494:       <footer className="bg-brand-primary text-white pt-20 pb-10">
495:         <div className="max-w-7xl mx-auto px-6">
496:           <div className="grid md:grid-cols-4 gap-12 mb-16">
497:             <div className="col-span-1 md:col-span-2">
498:               <div className="flex items-center gap-3 mb-6">
499:                 <span className="text-2xl font-serif font-bold text-white">
500:                   Maricy Arruda
501:                 </span>
502:               </div>
503:               <p className="text-slate-300 max-w-sm mb-8">
504:                 Advocacia especializada em Direito Previdenciário. Mais de 20 anos garantindo o futuro de centenas de famílias em Mirassol e região.
505:               </p>
506:               <div className="flex gap-4">
507:                 <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary transition-colors">
508:                   <Phone className="w-5 h-5" />
509:                 </a>
510:                 <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary transition-colors">
511:                   <Mail className="w-5 h-5" />
512:                 </a>
513:               </div>
514:             </div>
515: 
516:             <div>
517:               <h4 className="text-lg font-bold mb-6 text-brand-secondary uppercase tracking-widest">Links Rápidos</h4>
518:               <ul className="space-y-4 text-slate-300">
519:                 <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
520:                 <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
521:                 <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
522:                 <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
523:               </ul>
524:             </div>
525: 
526:             <div>
527:               <h4 className="text-lg font-bold mb-6 text-brand-secondary uppercase tracking-widest">Contato em Mirassol</h4>
528:               <ul className="space-y-4 text-slate-300">
529:                 <li className="flex items-start gap-3">
530:                   <MapPin className="w-5 h-5 text-brand-secondary shrink-0" />
531:                   <span>Rua Quintino Bocaiúva, 2125 - Centro, Mirassol/SP</span>
532:                 </li>
533:                 <li className="flex items-center gap-3">
534:                   <Phone className="w-5 h-5 text-brand-secondary shrink-0" />
535:                   <span>(17) 99123-4567</span>
536:                 </li>
537:                 <li className="flex items-center gap-3">
538:                   <Mail className="w-5 h-5 text-brand-secondary shrink-0" />
539:                   <span>contato@maricyarruda.adv.br</span>
540:                 </li>
541:               </ul>
542:             </div>
543:           </div>
544: 
545:           <div className="pt-10 border-t border-white/10 text-center text-slate-400 text-sm">
546:             <p>© {new Date().getFullYear()} Maricy Arruda Advocacia. Todos os direitos reservados. OAB/SP 194.672</p>
547:             <p className="mt-2">Desenvolvido com foco em resultados.</p>
548:           </div>
549:         </div>
550:       </footer>
551: 
552:       {/* Floating WhatsApp Button */}
553:       <motion.a
554:         href={WHATSAPP_LINK}
555:         target="_blank"
556:         rel="noreferrer"
557:         initial={{ scale: 0, opacity: 0 }}
558:         animate={{ scale: 1, opacity: 1 }}
559:         whileHover={{ scale: 1.1 }}
560:         whileTap={{ scale: 0.9 }}
561:         className="fixed bottom-6 right-6 z-50 bg-brand-accent text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-accent/90 transition-all group md:hidden"
562:       >
563:         <MessageCircle className="w-7 h-7" />
564:         <span className="absolute -top-1 -right-1 flex h-5 w-5">
565:           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
566:           <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-brand-accent text-[10px] font-black items-center justify-center shadow-sm">
567:             1
568:           </span>
569:         </span>
570:       </motion.a>
571:     </div>
572:   );
573: }
