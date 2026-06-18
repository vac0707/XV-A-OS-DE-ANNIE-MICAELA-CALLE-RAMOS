import { useEffect, useState, useRef, RefObject } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, MapPin, Calendar, Clock, Shirt, Gift, ChevronLeft, ChevronRight, Music, Heart, MailOpen, Facebook, Youtube, MessageCircle } from 'lucide-react';

// --- Constants & Data ---
const EVENT_DATE = new Date('2026-07-04T18:00:00');
const MUSIC_URL = "https://res.cloudinary.com/dcnynnstm/video/upload/v1780948238/La_canci%C3%B3n_m%C3%A1s_hermosa_para_una_Quincea%C3%B1era_Mi_princesa_Angel_Melo_once8h.mp3";
const COVER_IMAGE = "https://res.cloudinary.com/dcnynnstm/image/upload/v1781625839/ffffffffffffffffffffs.jpg_j8qt3g.jpg";
const BG_PATTERN = "https://res.cloudinary.com/dcnynnstm/image/upload/v1773723965/497927484_1363051325167172_558942534762591556_n_w2cdp4.jpg";

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1781821746/FOT_hxfau6.jpg",
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1781137231/DSC00574.jpg_tr6ag2.jpg",
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1781137232/DSC00622.jpg_mgbfzs.jpg",
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1781137232/DSC00625.jpg_obml3o.jpg",
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1781137233/DSC00583.jpg_glr6cl.jpg"
];

// --- Sub-components ---

const DiscoBall = () => {
  return (
    <div className="relative flex flex-col items-center select-none pointer-events-none mb-6">
      {/* Elegantly styled hanging silver chain */}
      <div className="w-[1px] h-16 md:h-20 bg-gradient-to-b from-white via-accent to-transparent opacity-80" />
      
      {/* 3D sphere rotating effect */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-white via-accent to-celestial-glow shadow-[0_0_35px_rgba(255,117,143,0.5)] border border-white/40 overflow-hidden"
      >
        {/* Mirror Grid Overlay */}
        <div className="absolute inset-0 opacity-45 mix-blend-overlay" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px'
        }} />
        
        {/* Spherical shadows and light spot */}
        <div className="absolute inset-0 rounded-full" style={{
          background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 70%)'
        }} />
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/25 via-transparent to-white/40" />
        
        {/* Dynamic moving highlights representing reflected light flashes */}
        <motion.div
          animate={{ x: [-20, 100, -20], y: [-20, 60, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-12 h-12 rounded-full bg-white opacity-40 blur-md"
        />
      </motion.div>
      
      {/* Glow Aura */}
      <div className="absolute top-16 w-32 h-32 rounded-full bg-accent/30 blur-3xl scale-125 disco-ball-shine" />
    </div>
  );
};

const StarBackground = () => {
  const [stars, setStars] = useState<{ id: number, left: string, top: string, size: string, duration: string }[]>([]);
  const [glitters, setGlitters] = useState<{ id: number, left: string, bottom: string, size: number, duration: string, delay: string, shape: string }[]>([]);

  useEffect(() => {
    const starCount = 50;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 4 + 2}s`
    }));
    setStars(newStars);

    const glitterCount = 20;
    const shapes = ['sparkle', 'diamond', 'circle', 'petal'];
    const newGlitters = Array.from({ length: glitterCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * -10}%`,
      size: Math.random() * 6 + 4,
      duration: `${Math.random() * 6 + 4}s`,
      delay: `${Math.random() * 4}s`,
      shape: shapes[Math.floor(Math.random() * shapes.length)]
    }));
    setGlitters(newGlitters);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-celestial-dark font-sans">
      <div 
        className="absolute inset-0 opacity-25 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG_PATTERN})`, mixBlendMode: 'soft-light' }}
      />
      
      {/* Disco ray sweep overlay */}
      <div className="disco-ray-container">
        <div className="disco-ray-sweep" style={{ '--duration': '35s' } as any} />
        <div className="disco-ray-sweep" style={{ '--duration': '50s', animationDirection: 'reverse' } as any} />
      </div>

      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            '--duration': star.duration
          } as any}
        />
      ))}

      {glitters.map((glit) => (
        <div
          key={glit.id}
          className="particle"
          style={{
            left: glit.left,
            bottom: glit.bottom,
            '--duration': glit.duration,
            animationDelay: glit.delay
          } as any}
        >
          {glit.shape === 'sparkle' && (
            <svg width={glit.size} height={glit.size} viewBox="0 0 24 24" fill="none" className="text-accent drop-shadow-[0_0_8px_rgba(255,117,143,0.7)]">
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" fill="currentColor" />
            </svg>
          )}
          {glit.shape === 'diamond' && (
            <div 
              style={{ width: glit.size, height: glit.size }} 
              className="bg-white/80 rotate-45 border border-accent/40 drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]"
            />
          )}
          {glit.shape === 'circle' && (
            <div 
              style={{ width: glit.size / 2, height: glit.size / 2 }} 
              className="bg-accent/60 rounded-full drop-shadow-[0_0_6px_rgba(255,117,143,0.7)]"
            />
          )}
          {glit.shape === 'petal' && (
            <svg width={glit.size} height={glit.size * 1.2} viewBox="0 0 24 24" fill="currentColor" className="text-accent/40 drop-shadow-[0_0_4px_rgba(255,117,143,0.3)]">
              <path d="M17,4C14.5,4 12.5,5.5 12,8C11.5,5.5 9.5,4 7,4C4.5,4 2,6.5 2,10C2,15 12,22 12,22C12,22 22,15 22,10C22,6.5 19.5,4 17,4Z" />
            </svg>
          )}
        </div>
      ))}


    </div>
  );
};

const MusicPlayer = ({ isPlaying, setIsPlaying, audioRef }: { isPlaying: boolean, setIsPlaying: (v: boolean) => void, audioRef: RefObject<HTMLAudioElement | null> }) => {
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button 
        onClick={togglePlay}
        className="group relative w-12 h-12 flex items-center justify-center bg-[#ff758f] hover:bg-[#ff4d6d] text-white backdrop-blur-md rounded-full shadow-[0_4px_15px_rgba(255,117,143,0.4)] hover:scale-110 border border-[#ffccd5]/50 transition-transform active:scale-95 cursor-pointer"
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="pause"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
            >
              <Pause className="w-5 h-5 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="play"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
            >
              <Play className="w-5 h-5 text-white fill-white" />
            </motion.div>
          )}
        </AnimatePresence>
        {isPlaying && (
          <div className="absolute -inset-1 rounded-full bg-[#ff758f]/20 animate-ping pointer-events-none" />
        )}
      </button>
    </div>
  );
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = EVENT_DATE.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Item = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/90 border border-accent/40 rounded-lg shadow-md">
        <span className="text-2xl md:text-3xl font-serif-cinzel text-[#800f2f] font-bold">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="mt-2 text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] text-[#800f2f] font-bold opacity-90">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex gap-4 justify-center">
      <Item value={timeLeft.days} label="Días" />
      <Item value={timeLeft.hours} label="Horas" />
      <Item value={timeLeft.mins} label="Minutos" />
      <Item value={timeLeft.secs} label="Segundos" />
    </div>
  );
};
const GallerySlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  const next = () => setIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-[3/4]">
      {/* Contenedor de la foto con sus efectos y overflow-hidden */}
      <div className="absolute inset-0 overflow-hidden photo-frame rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={GALLERY_IMAGES[index]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover"
            alt={`Gallery ${index}`}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-celestial-dark/60" />
      </div>
      
      {/* Marco de flores PNG overlay - Centrado perfectamente y 30% más grande */}
      <img 
        src="https://res.cloudinary.com/dcnynnstm/image/upload/v1781819812/MARCO_DE_FLORES_sifzs1.png"
        alt="Marco de Flores"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] object-fill pointer-events-none z-10 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
      />
      
      <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/35 backdrop-blur-sm silver-border text-white/80 hover:text-white transition-colors z-20">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/35 backdrop-blur-sm silver-border text-white/80 hover:text-white transition-colors z-20 flex items-center justify-center">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {GALLERY_IMAGES.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 transition-all duration-300 rounded-full ${i === index ? 'w-6 bg-silver-bright' : 'w-2 bg-silver/30'}`}
          />
        ))}
      </div>
    </div>
  );
};;

const WelcomeGate = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-celestial-dark overflow-hidden"
    >
      <StarBackground />
      
      <div className="relative z-10 text-center space-y-12 px-6">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative inline-block"
        >
          <div className="absolute -inset-12 bg-accent/20 blur-3xl rounded-full" />
          <div className="relative glass-card p-12 md:p-16 border-accent/20 shadow-[0_0_50px_rgba(255,117,143,0.15)]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              <MailOpen className="w-12 h-12 text-[#800f2f] mx-auto opacity-75" />
              <div className="space-y-4">
                <DiscoBall />
                <h2 className="font-serif-cinzel text-[#800f2f] text-sm tracking-[0.6em] uppercase">Estás Invitado</h2>
                <h1 className="font-cursive text-5xl md:text-7xl text-shine leading-tight">Annie Micaela</h1>
              </div>
              
              <button 
                onClick={onOpen}
                className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-serif-cinzel font-bold tracking-widest text-sm transition duration-300 ease-out border-2 border-[#ff758f] rounded-full shadow-md text-[#5c0620] hover:text-white"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ff758f] group-hover:translate-x-0 ease">
                   ABRIR RECUERDO
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-[#5c0620] transition-all duration-300 transform group-hover:translate-x-full ease">
                  ¡ABRIR INVITACIÓN!
                </span>
                <span className="relative invisible text-[#5c0620]">¡ABRIR INVITACIÓN!</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5 }}
          className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#800f2f] font-semibold"
        >
          Haz clic para entrar a este mundo mágico
        </motion.p>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-silver/30 overflow-x-hidden">
      <audio ref={audioRef} src={MUSIC_URL} loop />
      
      <AnimatePresence mode="wait">
        {!isInvitationOpen && (
          <WelcomeGate onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>

      <div className={`${!isInvitationOpen ? 'h-screen overflow-hidden' : ''}`}>
        <StarBackground />
        {isInvitationOpen && <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} />}

        <main className={`relative z-10 transition-all duration-1000 ${isInvitationOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        
        {/* --- Hero Section --- */}
        <section className="h-screen flex flex-col items-center justify-center px-4 overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={COVER_IMAGE} 
              alt="Annie Micaela"
              className="w-full h-full object-cover object-center md:object-[center_20%]"
            />
          </motion.div>

          <div className="z-20 text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-col items-center"
            >
              <span className="font-serif-cinzel text-[#800f2f] uppercase tracking-[0.5em] text-xs md:text-base font-bold">
                Mis Dulces
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="font-serif-cinzel italic text-5xl md:text-7xl text-shine leading-tight py-4"
            >
              Annie Micaela Calle Ramos
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="flex items-center justify-center gap-4 text-[#800f2f] font-serif-cinzel text-lg md:text-2xl font-semibold"
            >
              <div className="h-[1px] w-12 bg-accent/40" />
              <span>Mis 15 Años</span>
              <div className="h-[1px] w-12 bg-accent/40" />
            </motion.div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 z-20 opacity-70"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase font-sans tracking-widest text-[#800f2f] font-bold">Deslizar</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
            </div>
          </motion.div>
        </section>

        {/* --- Poem Section --- */}
        <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center relative overflow-hidden">
          {/* Decorative Flowers */}
          <img 
            src="https://res.cloudinary.com/dcnynnstm/image/upload/v1781821101/pngwing.com_16_p3acpm.png" 
            alt="Flores decorativas esquina" 
            className="absolute top-0 left-0 w-32 md:w-52 h-auto pointer-events-none opacity-80 z-0 select-none" 
          />
          <img 
            src="https://res.cloudinary.com/dcnynnstm/image/upload/v1781820222/pngwing.com_11_vynhrr.png" 
            alt="Flores decorativas" 
            className="absolute bottom-0 right-0 w-32 md:w-52 h-auto pointer-events-none opacity-80 z-0 select-none" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12 relative z-10"
          >
            <div className="relative inline-block">
                <Heart className="w-10 h-10 text-[#ff758f] mx-auto opacity-70" />
                <div className="absolute -inset-4 bg-accent/15 blur-xl rounded-full" />
            </div>
            <p className="font-serif-playfair text-xl md:text-2xl leading-relaxed italic text-[#800f2f] px-4 border-l-2 border-accent pl-8 max-w-lg mx-auto">
              “Este es mi día especial es el reflejo de la belleza, la dulzura y la luz que llevo en el corazón , hoy celebro  mis quince años, el inicio de una etapa llena de sueños, ilusiones y nuevas oportunidades brillando siempre con ilusión,  me encantaría q formes parte de este sueño hecho realidad”
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto" />
          </motion.div>
        </section>

        {/* --- Family Section --- */}
        <section className="py-32 relative overflow-hidden bg-celestial-glow/30 border-y silver-border">
          {/* Decorative Flowers */}
          <img 
            src="https://res.cloudinary.com/dcnynnstm/image/upload/v1781820520/01_nl9inv.png" 
            alt="Corona floral" 
            className="absolute top-0 right-0 w-36 md:w-56 h-auto pointer-events-none opacity-85 z-0 select-none" 
          />
          <img 
            src="https://res.cloudinary.com/dcnynnstm/image/upload/v1781821101/pngwing.com_15_ongokr.png" 
            alt="Esquina floral" 
            className="absolute bottom-0 left-0 w-36 md:w-56 h-auto pointer-events-none opacity-85 z-0 select-none" 
          />
          
          <div className="max-w-5xl mx-auto px-6 space-y-16 text-center relative z-10">
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
            >
                <span className="ornament-text">✧ ───────── ✧</span>
                <p className="font-cursive text-4xl md:text-5xl text-[#800f2f]">
                    Tenemos el agrado de invitar a celebrar los
                </p>
                <h2 className="font-serif-cinzel text-5xl md:text-7xl text-shine tracking-widest font-bold">
                  XV AÑOS
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative z-10 text-left md:text-center">
                {/* Parents */}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
                >
                    <div className="space-y-2">
                        <h3 className="font-sans text-[11px] text-[#ff758f] tracking-[0.2em] uppercase font-bold">Padres</h3>
                    </div>
                    <div className="space-y-3 font-cursive text-3xl md:text-4xl text-[#5c0620] leading-relaxed">
                        <p>Lili Ramos Anampa</p>
                        <p>Adimir Didi Calle Llactahuamani</p>
                    </div>
                </motion.div>

                {/* Padrino */}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
                >
                    <div className="space-y-2">
                        <h3 className="font-sans text-[11px] text-[#ff758f] tracking-[0.2em] uppercase font-bold">Padrinos</h3>
                    </div>
                    <div className="space-y-3 font-cursive text-3xl md:text-4xl text-[#5c0620] leading-relaxed">
                        <p>Mario Ramos Anampa</p>
                        <p>Irene Borda Arostegui</p>
                    </div>
                </motion.div>
            </div>
          </div>
        </section>

        {/* --- Countdown & Calendar --- */}
        <section className="py-32 px-6 text-center space-y-20 relative overflow-hidden">
          {/* Decorative Flowers */}
          <img 
            src="https://res.cloudinary.com/dcnynnstm/image/upload/v1781821101/pngwing.com_16_p3acpm.png" 
            alt="Detalle floral" 
            className="absolute top-0 right-0 w-32 md:w-48 h-auto pointer-events-none opacity-80 z-0 select-none" 
          />
          
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="space-y-10 relative z-10"
          >
            <h2 className="font-serif-cinzel text-[#800f2f] text-base tracking-[0.6em] uppercase font-bold">Faltan Sólo</h2>
            <Countdown />
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative inline-block z-10"
          >
            <div className="relative bg-white text-slate-800 p-10 md:p-14 space-y-4 rounded-sm shadow-2xl border border-accent/20">
                <div className="font-sans text-sm tracking-[0.3em] uppercase border-b border-[#ff4d6d]/25 pb-4 mb-4 text-[#ff4d6d] font-bold">
                JULIO 2026
                </div>
                <div className="flex flex-col items-center">
                <span className="font-sans text-lg tracking-[0.5em] mb-1 font-bold text-[#800f2f]">SÁBADO</span>
                <span className="font-serif-cinzel text-7xl md:text-[7rem] leading-none font-bold text-[#5c0620]">04</span>
                </div>
            </div>
          </motion.div>

          {/* Centered Elegante Flower Separator */}
          <div className="flex justify-center select-none pointer-events-none mt-12 relative z-10">
            <img 
              src="https://res.cloudinary.com/dcnynnstm/image/upload/v1781820520/01_nl9inv.png" 
              alt="Separador de flores" 
              className="w-[180px] md:w-[240px] opacity-90 h-auto" 
            />
          </div>
        </section>

        {/* --- Event Details --- */}
        <section id="cuando-y-donde" className="py-32 px-6 max-w-6xl mx-auto space-y-16 relative overflow-hidden">
          {/* Decorative Flowers */}
          <img 
            src="https://res.cloudinary.com/dcnynnstm/image/upload/v1781820222/pngwing.com_11_vynhrr.png" 
            alt="Detalle floral esquina" 
            className="absolute top-0 right-0 w-44 md:w-64 h-auto pointer-events-none opacity-80 z-0 select-none translate-x-4" 
          />
          <img 
            src="https://res.cloudinary.com/dcnynnstm/image/upload/v1781821101/pngwing.com_15_ongokr.png" 
            alt="Detalle floral esquina opuesta" 
            className="absolute bottom-0 left-0 w-40 md:w-60 h-auto pointer-events-none opacity-80 z-0 select-none -translate-x-4" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 relative z-10"
          >
            <span className="ornament-text">✧ ───────── ✧</span>
            <h2 className="font-serif-cinzel text-5xl md:text-6xl text-[#800f2f] tracking-widest font-bold">¿CUÁNDO Y DÓNDE?</h2>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#ff758f] font-bold">Todo sobre el gran día</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch relative z-10">
            {/* Main Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 flex flex-col items-center text-center space-y-8"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full silver-border bg-accent/10">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              
              <div className="space-y-4">
                <h3 className="font-serif-cinzel text-2xl text-[#800f2f] tracking-[0.2em] font-bold">RECEPCIÓN</h3>
                <div className="h-px w-16 bg-[#ff4d6d]/30 mx-auto" />
              </div>

              <div className="space-y-6">
                <div className="space-y-1">
                    <p className="font-serif-playfair text-4xl text-[#5c0620] font-bold">Casa Verde Abancay</p>
                    <p className="font-sans text-xs text-[#800f2f] tracking-widest font-semibold">SÁBADO 04 DE JULIO</p>
                </div>
                
                <div className="flex items-center justify-center gap-8 py-4 border-y border-[#ff758f]/30">
                  <div className="flex flex-col items-center gap-1 text-[#5c0620]">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="font-serif-cinzel text-lg font-semibold">6:00 PM</span>
                  </div>
                  <div className="w-px h-10 bg-accent/20" />
                  <div className="flex flex-col items-center gap-1 text-[#5c0620]">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="font-serif-cinzel text-lg font-semibold">04/07/26</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full max-w-xs gap-4 font-sans">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/51943087193?text=Hola%2C%20confirmo%20mi%20asistencia%20a%20los%20XV%20a%C3%B1os%20de%20Annie%20Micaela%20Calle%20Ramos%20%F0%9F%8E%89" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#ff758f] hover:bg-[#ff4d6d] text-white font-serif-cinzel font-bold text-sm tracking-widest shadow-[0_4px_15px_rgba(255,117,143,0.3)] transition-all cursor-pointer"
                >
                  CONFIRMAR ASISTENCIA <MailOpen className="w-4 h-4 ml-1" />
                </motion.a>

                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://maps.app.goo.gl/ciCBb2RKH9numfj79" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white border border-[#ff758f]/40 text-[#800f2f] font-serif-cinzel font-bold text-sm tracking-widest hover:bg-pink-100/35 transition-all text-center cursor-pointer"
                >
                  VER UBICACIÓN <MapPin className="w-4 h-4 text-accent" />
                </motion.a>
              </div>
            </motion.div>

            {/* Side Info */}
            <div className="grid grid-rows-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 flex items-center gap-8 group hover:bg-pink-100/10 transition-colors"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full silver-border bg-[#ffe5ec]/20 group-hover:scale-110 transition-transform">
                  <Shirt className="w-8 h-8 text-accent animate-pulse" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif-cinzel text-xs text-[#800f2f] tracking-[0.3em] uppercase font-bold opacity-80">Código de Vestimenta</h3>
                  <p className="font-serif-playfair text-2xl text-[#5c0620] font-bold">Sport Elegante</p>
                  <p className="text-[11px] text-[#ff0054] font-bold italic max-w-[240px]">
                    No llevar vestido rosa — es exclusivo para la quinceañera.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8 flex items-center gap-8 group hover:bg-pink-100/10 transition-colors"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full silver-border bg-[#ffe5ec]/20 group-hover:scale-110 transition-transform">
                  <Gift className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-1 flex-1">
                  <h3 className="font-serif-cinzel text-xs text-[#800f2f] tracking-[0.3em] uppercase font-bold opacity-80">Presente</h3>
                  <p className="font-serif-playfair text-xs text-[#4a0d17] leading-relaxed italic pr-2">
                    “Tu amor y tu compañía son el regalo más dulce de mi noche. Pero si deseas consentirme con un obsequio, un depósito a mi cuenta me llenará de ilusión y gratitud”
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-[#ff758f] text-white font-bold rounded text-[10px] font-sans uppercase">Yape</span>
                    <span className="font-sans font-bold text-[#800f2f] text-sm">+51 943 087 193</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Gallery Section --- */}
        <section className="py-32 px-6 overflow-hidden relative">
          {/* Decorative Flowers */}
          <img 
            src="https://res.cloudinary.com/dcnynnstm/image/upload/v1781821101/pngwing.com_16_p3acpm.png" 
            alt="Toque floral galería" 
            className="absolute bottom-0 left-0 w-32 md:w-48 h-auto pointer-events-none opacity-80 z-0 select-none" 
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-16"
          >
            <div className="space-y-4">
                <div className="h-px w-24 bg-silver/20 mx-auto" />
                <h2 className="font-cursive text-6xl md:text-8xl text-silver-bright text-shine">Galería</h2>
                <p className="font-serif-cinzel text-[10px] tracking-[0.6em] text-silver uppercase opacity-60">Instantes de Magia</p>
            </div>
            <GallerySlider />
          </motion.div>
        </section>

        {/* --- Footer --- */}
        <section className="py-40 px-6 text-center space-y-16 bg-gradient-to-t from-celestial-glow/30 to-transparent relative overflow-hidden">
          {/* Decorative Flowers */}
          <img 
            src="https://res.cloudinary.com/dcnynnstm/image/upload/v1781821101/pngwing.com_15_ongokr.png" 
            alt="Toque floral final" 
            className="absolute top-0 left-0 w-32 md:w-52 h-auto pointer-events-none opacity-80 z-0 select-none" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10 relative z-10"
          >
            <h3 className="font-cursive text-6xl text-[#800f2f]">¡Gracias por ser parte de mi historia!</h3>
            <div className="flex items-center justify-center gap-4">
                <div className="h-px w-16 md:w-32 bg-accent/30" />
                <Heart className="w-6 h-6 text-accent fill-accent animate-pulse" />
                <div className="h-px w-16 md:w-32 bg-accent/30" />
            </div>
          </motion.div>
          
          <div className="space-y-2 opacity-70">
            <p className="font-serif-cinzel text-[10px] tracking-[1em] text-[#800f2f] uppercase font-bold">Annie Micaela</p>
            <p className="font-sans text-[8px] tracking-[0.2em] text-[#800f2f]/85 uppercase text-center font-semibold">Mis 15 Años • 2026</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto p-6 rounded-lg glass-card border border-accent/30 bg-white/70 space-y-4"
          >
            <p className="font-sans text-[9px] tracking-[0.2em] text-accent font-bold uppercase">¿Deseas una invitación como esta?</p>
            
            <div className="space-y-1">
              <h4 className="font-serif-cinzel text-sm text-[#800f2f] font-bold tracking-wider">V.A.C. Creative</h4>
              <p className="font-sans text-[11px] text-[#4a0d17]/85 italic">Invitaciones virtuales y diseño gráfico en general</p>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <motion.a 
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/51932350348?text=Hola%20V.A.C.%20Creative%2C%20vi%20tu%20trabajo%20en%20la%20invitaci%C3%B3n%20de%20Annie%20Micaela%20y%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20invitaciones%20virtuales%20y%20servicios%20de%20dise%C3%B1o%20gr%C3%A1fico.%20%F0%9F%8E%89%E2%9C%A8"
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent transition-all cursor-pointer"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.tiktok.com/@vaccreative?is_from_webapp=1&sender_device=pc"
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent transition-all cursor-pointer"
                title="TikTok"
              >
                <Music className="w-4 h-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/VAC.Creativ"
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent transition-all cursor-pointer"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.youtube.com/@V.A.C.Creative"
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent transition-all cursor-pointer"
                title="YouTube"
              >
                <Youtube className="w-4 h-4 text-center" />
              </motion.a>
            </div>
          </motion.div>
        </section>

      </main>
      </div>

      {/* Ornament Overlay */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-[5]" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/black-paper.png')` }} />

      {/* Decorative full invitation floral corner overlay */}
      <div className="fixed bottom-0 right-0 pointer-events-none z-[45]">
        <img 
          src="https://res.cloudinary.com/dcnynnstm/image/upload/v1781593708/FLOR_AB_gh9xza.png"
          alt="Floral ornament"
          className="w-[40vw] max-w-[150px] sm:max-w-[180px] md:max-w-[240px] lg:max-w-[280px] h-auto object-contain pointer-events-none"
        />
      </div>
    </div>
  );
}
