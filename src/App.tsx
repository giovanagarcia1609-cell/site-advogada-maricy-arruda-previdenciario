import { motion } from "motion/react";
import { 
  MessageCircle, 
  Scale, 
  ShieldCheck, 
  Clock, 
  Award, 
  CheckCircle2, 
  ChevronRight, 
  Phone, 
  MapPin, 
  Mail,
  Menu,
  X,
  HelpCircle,
  Star
} from "lucide-react";
import { useState, useEffect } from "react";
import ReactGA from "react-ga4";

const WHATSAPP_LINK = "https://wa.me/5517991118161?text=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20Previdenci%C3%A1rio";

const BASE_URL = import.meta.env.BASE_URL;

const services = [
  {
    title: "Aposentadoria por Idade",
    description: "Análise completa do seu tempo de contribuição e idade para garantir o melhor benefício possível.",
    icon: <Clock className="w-8 h-8 text-brand-secondary" />
  },
  {
    title: "BPC / LOAS",
    description: "Auxílio para idosos acima de 65 anos ou pessoas com deficiência em situação de vulnerabilidade.",
    icon: <ShieldCheck className="w-8 h-8 text-brand-secondary" />
  },
  {
    title: "Benefícios por Incapacidade",
    description: "Auxílio-doença e aposentadoria por invalidez para quem não pode mais trabalhar por motivos de saúde.",
    icon: <Scale className="w-8 h-8 text-brand-secondary" />
  },
  {
    title: "Planejamento Previdenciário",
    description: "Estudo detalhado para descobrir quando e com quanto você vai se aposentar, evitando prejuízos.",
    icon: <Award className="w-8 h-8 text-brand-secondary" />
  },
  {
    title: "Pensão por Morte",
    description: "Amparo jurídico para dependentes garantirem seus direitos após a perda de um ente querido.",
    icon: <CheckCircle2 className="w-8 h-8 text-brand-secondary" />
  },
  {
    title: "Revisão de Benefícios",
    description: "Análise de benefícios já concedidos para verificar se o valor está correto ou se cabe aumento.",
    icon: <Star className="w-8 h-8 text-brand-secondary" />
  }
];

const testimonials = [
  {
    name: "Maria Silva",
    text: "A Dra. Maricy foi fundamental para conseguir minha aposentadoria. Depois de anos tentando sozinha, ela resolveu tudo em poucos meses.",
    rating: 5
  },
  {
    name: "João Pereira",
    text: "Excelente profissional. Muito atenciosa e explicou cada passo do processo do meu BPC. Recomendo a todos em Mirassol.",
    rating: 5
  },
  {
    name: "Ana Oliveira",
    text: "O planejamento previdenciário que ela fez me salvou de uma aposentadoria muito menor. Valeu cada centavo.",
    rating: 5
  }
];

const faqs = [
  {
    question: "Quanto tempo demora para sair a aposentadoria?",
    answer: "O tempo varia conforme o tipo de benefício e a análise do INSS, mas com o acompanhamento jurídico adequado, evitamos erros que causam atrasos desnecessários."
  },
  {
    question: "Preciso ir até o escritório para ser atendido?",
    answer: "Atendemos de forma presencial em nosso escritório em Mirassol e também realizamos atendimentos online para sua maior comodidade."
  },
  {
    question: "Quais documentos são necessários para o BPC/LOAS?",
    answer: "Geralmente são necessários documentos pessoais, comprovante de residência, Cadastro Único atualizado e laudos médicos (no caso de deficiência)."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    // Initialize GA4
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (gaId) {
      ReactGA.initialize(gaId);
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2 md:py-3" : "bg-transparent py-4 md:py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <img src={`${BASE_URL}logo.jpg`} alt="Maricy Arruda Logo" className="h-10 md:h-12 w-auto" />
            <span className="text-lg md:text-xl font-serif font-bold text-brand-primary">
              Maricy Arruda
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium hover:text-brand-secondary transition-colors">Início</a>
            <a href="#servicos" className="text-sm font-medium hover:text-brand-secondary transition-colors">Serviços</a>
            <a href="#sobre" className="text-sm font-medium hover:text-brand-secondary transition-colors">Sobre</a>
            <a href="#localizacao" className="text-sm font-medium hover:text-brand-secondary transition-colors">Localização</a>
            <a href="#depoimentos" className="text-sm font-medium hover:text-brand-secondary transition-colors">Depoimentos</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="relative bg-brand-accent text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-accent/90 transition-all shadow-lg flex items-center gap-2 group">
              <MessageCircle className="w-4 h-4" />
              Falar com Especialista
              <span className="absolute -top-2 -right-1 flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-brand-accent text-[10px] font-black items-center justify-center shadow-sm">
                  1
                </span>
              </span>
            </a>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-brand-primary" /> : <Menu className="text-brand-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Início</a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Serviços</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Sobre</a>
            <a href="#localizacao" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Localização</a>
            <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Depoimentos</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="relative btn-whatsapp">
              <MessageCircle className="w-5 h-5" /> WhatsApp
              <span className="absolute -top-1 -right-1 flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-brand-accent text-[10px] font-black items-center justify-center shadow-sm">
                  1
                </span>
              </span>
            </a>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/5 skew-x-12 transform translate-x-20" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-brand-secondary/10 text-brand-secondary px-4 py-1 rounded-full text-xs md:sm font-bold mb-6">
                <Award className="w-4 h-4" /> +20 Anos de Experiência
              </div>
              <h1 className="text-4xl md:text-7xl font-serif font-bold text-brand-primary leading-tight mb-6">
                Sua <span className="text-brand-secondary">Aposentadoria</span> em Mirassol com Segurança
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                Especialista em Direito Previdenciário em Mirassol e Região. Lutamos pelo seu benefício do INSS com agilidade e transparência.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp text-lg">
                  <MessageCircle className="w-6 h-6" /> Falar com Especialista<span className="hidden sm:inline"> agora</span>
                </a>
                <a href="#servicos" className="flex items-center justify-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all">
                  Ver nossos serviços <ChevronRight className="w-5 h-5" />
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-4">
                <div className="text-sm">
                  <div className="flex text-yellow-400 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-500 font-medium">+500 clientes satisfeitos em Mirassol</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={`${BASE_URL}hero.jpg`} 
                  alt="Dra. Maricy Arruda" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
                <p className="text-brand-primary font-serif font-bold text-lg mb-1">Dra. Maricy Arruda</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">OAB/SP 123.456</p>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-secondary/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-brand-primary py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-serif font-bold text-white mb-1">20+</p>
              <p className="text-brand-secondary text-sm font-bold uppercase tracking-widest">Anos de Atuação</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-white mb-1">1k+</p>
              <p className="text-brand-secondary text-sm font-bold uppercase tracking-widest">Processos Ativos</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-white mb-1">98%</p>
              <p className="text-brand-secondary text-sm font-bold uppercase tracking-widest">Taxa de Sucesso</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-white mb-1">24h</p>
              <p className="text-brand-secondary text-sm font-bold uppercase tracking-widest">Resposta Rápida</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6">Especialista em Direito Previdenciário em Mirassol</h2>
              <p className="text-lg text-slate-600">
                Oferecemos assessoria jurídica completa para garantir seus direitos junto ao INSS. Atendimento especializado em Mirassol e toda a região.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="card-service"
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-brand-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Consultar agora <ChevronRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-light">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-brand-primary rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                  Não perca mais tempo lutando sozinho contra o INSS
                </h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                  Muitas pessoas perdem dinheiro por não conhecerem seus direitos. Deixe um especialista cuidar do seu futuro.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp text-lg px-10">
                    <MessageCircle className="w-6 h-6" /> Falar com Especialista
                  </a>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-8">Dra. Maricy Arruda</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Com mais de duas décadas dedicadas exclusivamente ao Direito Previdenciário, construí uma carreira pautada na ética, no compromisso e na busca incessante pelos direitos dos meus clientes.
                </p>
                <p>
                  Atuamos em casos de Aposentadoria por Idade, Tempo de Contribuição, Especial, além de pedidos de BPC/LOAS e revisões de benefícios. Se você procura por um advogado previdenciário em Mirassol, está no lugar certo.
                </p>
                <p>
                  Nosso escritório em Mirassol é referência em agilidade e atendimento humanizado, tratando cada caso com a atenção e o detalhismo que o INSS exige para a concessão do seu benefício.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0" />
                  <span className="font-medium">Especialista em Direito Previdenciário</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0" />
                  <span className="font-medium">Atendimento em todo o Brasil (Online)</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src={`${BASE_URL}hero.jpg`} 
                  alt="Dra. Maricy Arruda" 
                  className="rounded-3xl shadow-xl w-full h-auto object-cover aspect-[4/5] object-top"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute -bottom-10 -right-10 hidden lg:block">
                  <div className="bg-brand-secondary p-8 rounded-2xl text-white shadow-xl">
                    <p className="text-4xl font-serif font-bold mb-1">20+</p>
                    <p className="text-sm font-bold uppercase tracking-widest opacity-80">Anos de História</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="localizacao" className="py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-8">Onde Estamos</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Nosso escritório está estrategicamente localizado no coração de Mirassol, oferecendo um ambiente acolhedor e profissional para atender você e sua família com todo o conforto necessário.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-primary">Endereço</p>
                      <p className="text-slate-600">Rua Quintino Bocaiúva, 2125 - Centro, Mirassol/SP</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-primary">Horário de Atendimento</p>
                      <p className="text-slate-600">Segunda a Sexta: 08:00 às 18:00</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[2, 3, 4, 5].map((i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-xl overflow-hidden shadow-md h-40"
                    >
                      <img 
                        src={`${BASE_URL}interno-${i}.jpeg`} 
                        alt={`Escritório de Advocacia Dra. Maricy Arruda em Mirassol - Sala de Atendimento ${i}`} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.876543210!2d-49.512345678!3d-20.812345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad123456789%3A0x1234567890abcdef!2sMirassol%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6">O que nossos clientes dizem</h2>
              <div className="flex justify-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                >
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-brand-primary">
                      {t.name[0]}
                    </div>
                    <span className="font-bold text-brand-primary">{t.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-brand-primary text-center mb-12">Dúvidas Frequentes</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-slate-200 pb-6">
                  <h3 className="text-xl font-serif font-bold text-brand-primary mb-3 flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-secondary" />
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed pl-8">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-slate-500 mb-6">Ainda tem dúvidas?</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary inline-flex">
                Falar com a Dra. Maricy
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-primary text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-serif font-bold text-white">
                  Maricy Arruda
                </span>
              </div>
              <p className="text-slate-300 max-w-sm mb-8">
                Advocacia especializada em Direito Previdenciário. Mais de 20 anos garantindo o futuro de centenas de famílias em Mirassol e região.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-brand-secondary uppercase tracking-widest">Links Rápidos</h4>
              <ul className="space-y-4 text-slate-300">
                <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-brand-secondary uppercase tracking-widest">Contato em Mirassol</h4>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-secondary shrink-0" />
                  <span>Rua Quintino Bocaiúva, 2125 - Centro, Mirassol/SP</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-secondary shrink-0" />
                  <span>(17) 99123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-secondary shrink-0" />
                  <span>contato@maricyarruda.adv.br</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 text-center text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} Maricy Arruda Advocacia. Todos os direitos reservados. OAB/SP 123.456</p>
            <p className="mt-2">Desenvolvido com foco em resultados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-brand-accent text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-accent/90 transition-all group md:hidden"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-brand-accent text-[10px] font-black items-center justify-center shadow-sm">
            1
          </span>
        </span>
      </motion.a>
    </div>
  );
}
