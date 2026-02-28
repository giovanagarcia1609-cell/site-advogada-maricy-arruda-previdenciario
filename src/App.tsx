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
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">OAB/SP 194.672</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Serviços e demais seções continuam iguais... */}
        {/* (Omitido aqui por brevidade, mas o arquivo completo no seu projeto deve ser mantido) */}
      </main>

      {/* Footer e Botão Flutuante continuam iguais... */}
    </div>
  );
}
