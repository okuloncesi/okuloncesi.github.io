import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import {
  Activity,
  AlertTriangle,
  BarChart2,
  BookOpen,
  Brain,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Map,
  Menu,
  X,
  Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';

// ChartJS Konfigürasyonu
ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler
);

// --- VERİ HAVUZU ---

const RISK_DATA = {
  '0-6 Ay': [
    'Göz teması kurmuyor veya çok kısa (sosyal etkileşim eksikliği).',
    'Yüksek seslere (kapı çarpması vb.) irkilme tepkisi vermiyor.',
    'Annesinin/bakıcısının sesini takip etmiyor, sese yönelmiyor.',
    'Başını desteksiz tutamıyor (3. aydan sonra).',
    'Sosyal gülümseme (siz gülünce gülme) yok.'
  ],
  '6-12 Ay': [
    'İsmi söylendiğinde dönüp bakmıyor.',
    'Agulama veya hece tekrarları (ba-ba, de-de) yok.',
    'İstediği nesneyi işaret parmağıyla göstermiyor (Joint Attention eksikliği).',
    'Ce-e (Peek-a-boo) oyununa ilgi göstermiyor.',
    'Desteksiz oturamıyor (9. aya kadar).'
  ],
  '12-18 Ay': [
    'Tek kelimelik basit sözcükleri (anne, baba, su) henüz yok.',
    'Basit komutları (al, ver, gel) anlamıyor.',
    'İlgi duyduğu bir şeyi size göstermek için getirmiyor.',
    'Henüz yürümeye başlamadı.',
    'Göz kontağı kısıtlı veya kaçıngan.'
  ],
  '18-24 Ay': [
    'En az 6-10 anlamlı kelimesi yok.',
    'İki kelimelik basit cümle kuramıyor (Anne gel, su ver).',
    'Taklit yeteneği zayıf (telefonla konuşur gibi yapmıyor).',
    'Vücut organlarını ("burnun nerede?") gösteremiyor.',
    'Kendi etrafında dönme, sallanma gibi stereotipik hareketler var.'
  ]
} as const;

type AgeGroup = keyof typeof RISK_DATA;

// --- YARDIMCI BİLEŞENLER ---

const ReferenceBox = ({ references }: { references: string[] }) => (
  <div className="mt-8 bg-stone-100 p-5 rounded-lg border-l-4 border-stone-400 text-xs text-stone-600 font-serif leading-relaxed">
    <h5 className="font-bold mb-2 uppercase tracking-widest text-stone-500">Akademik Kaynakça (APA)</h5>
    <ul className="space-y-2">
      {references.map((ref, idx) => (
        <li key={idx} className="pl-2 border-l-2 border-stone-300">{ref}</li>
      ))}
    </ul>
  </div>
);

const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-10 animate-fade-in-up">
    <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 font-serif">{title}</h2>
    <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full mb-4"></div>
    <p className="text-stone-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

// --- ANA SAYFA BİLEŞENLERİ ---

// 1. Landing (Hero)
const LandingPage = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
  return (
    <div className="w-full">
      <div className="relative w-full py-20 md:py-32 bg-stone-900 text-white rounded-3xl overflow-hidden shadow-2xl mb-12 mx-auto">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=2554&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute top-0 -left-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 -right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span className="inline-block py-1 px-4 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Ebeveyn ve Eğitimciler İçin Bilimsel Kaynak
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-serif">
            Gelecek, Genlerde Değil <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
              Deneyimlerde Şekillenir.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Beyin mimarisi "bekle ve gör" diyerek değil, bilinçli etkileşimlerle inşa edilir. Bilimsel verilerle çocuğunuzun potansiyelini keşfedin.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={() => setActiveTab('riskmetre')}
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition transform hover:scale-105 shadow-lg shadow-orange-900/50 flex items-center justify-center gap-2"
            >
              <Activity size={20} />
              Gelişimsel Risk Analizi
            </button>
            <button
              onClick={() => setActiveTab('science')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl font-bold transition flex items-center justify-center gap-2"
            >
              <Brain size={20} />
              Bilimsel Temelleri Oku
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {[
          { icon: "🧠", title: "Nöroplastisite", desc: "Beyin, 0-3 yaş arasında saniyede 1 milyon yeni bağlantı kurar." },
          { icon: "🛡️", title: "Toksik Stres Kalkanı", desc: "Güvenli ilişkiler, stresi tolere edilebilir düzeye indirir." },
          { icon: "📈", title: "Kanıtlanmış Etki", desc: "Erken müdahale, yetişkinlikteki başarıyı doğrudan etkiler." }
        ].map((item, idx) => (
          <div key={idx} className="p-8 bg-white rounded-2xl shadow-lg border border-stone-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="text-5xl mb-4 bg-stone-50 w-20 h-20 flex items-center justify-center rounded-full mx-auto">{item.icon}</div>
            <h3 className="text-xl font-bold text-stone-800 mb-2 text-center">{item.title}</h3>
            <p className="text-stone-600 text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 2. Bilim (Science)
const ScienceSection = () => {
  return (
    <div className="animate-fade-in space-y-12">
      <SectionTitle
        title="Gelişimin Görünmez Mimarları"
        subtitle="Erken müdahale sadece 'öğretmek' değildir; beynin biyolojik ve çevresel altyapısını kurmaktır. İşte 4 temel bilimsel prensip."
      />

      <div className="space-y-12">
        {/* 1. Neuroplasticity */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/3 bg-teal-50 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold text-teal-900 font-serif">Beyin Mimarisi ve Budanma</h3>
            <span className="inline-block mt-2 px-3 py-1 bg-teal-200 text-teal-800 text-xs font-bold rounded-full">TEMEL KAVRAM</span>
          </div>
          <div className="md:w-2/3">
            <h4 className="text-2xl font-bold text-stone-800 mb-4">Ev İnşaatı Metaforu</h4>
            <p className="text-stone-600 mb-4 leading-relaxed text-lg">
              Beyin gelişimi bir ev inşasına benzer. Genler evin planıdır, ancak deneyimler evi inşa eden ustalardır.
              Bebeklikte beyin "aşırı üretim" yapar (Synaptogenesis). Daha sonra verimlilik için <strong>"Kullan ya da Kaybet"</strong> (Synaptic Pruning) prensibi devreye girer.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Çocuğun sık maruz kaldığı yollar (dil, sevgi, müzik) otobana dönüşürken, kullanılmayan yollar (ihmal durumunda) budanır ve yok olur. Erken müdahale, bu yolların doğru inşa edilmesini sağlar.
            </p>
          </div>
        </div>

        {/* 2. Serve and Return */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100 flex flex-col md:flex-row-reverse gap-10 items-center">
          <div className="md:w-1/3 bg-orange-50 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🎾</div>
            <h3 className="text-2xl font-bold text-orange-900 font-serif">Serve & Return</h3>
            <span className="inline-block mt-2 px-3 py-1 bg-orange-200 text-orange-800 text-xs font-bold rounded-full">ETKİLEŞİM</span>
          </div>
          <div className="md:w-2/3">
            <h4 className="text-2xl font-bold text-stone-800 mb-4">Tenis Maçı Metaforu</h4>
            <p className="text-stone-600 mb-4 leading-relaxed text-lg">
              Harvard Gelişen Çocuk Merkezi'nin tanımladığı bu kavram, beyin besinidir. Çocuk bir ses çıkarır, bakar veya işaret eder (Servis Atar). Yetişkin göz teması, gülümseme ve kelimelerle karşılık verir (Topu Karşılar).
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-4">
              <p className="text-orange-900 font-medium">Kritik Uyarı: Eğer yetişkin sürekli tepkisiz kalırsa (kronik ihmal), çocuğun stres sistemi devreye girer ve beyin gelişimi fiziksel olarak zarar görür.</p>
            </div>
          </div>
        </div>

        {/* 3. Transactional & Ecological Models */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-stone-100">
            <div className="text-4xl mb-4 text-indigo-600">🔄</div>
            <h3 className="text-xl font-bold text-indigo-900 mb-3 font-serif">Transaksiyonel Model (Sameroff)</h3>
            <p className="text-stone-600 leading-relaxed">
              Gelişim tek yönlü değildir; döngüseldir. Çocuk çevreyi, çevre de çocuğu değiştirir. "Zor mizaçlı" bir bebek ebeveynini strese sokabilir; stresli ebeveyn bebeğe daha az tahammül eder. Müdahale bu negatif döngüyü kırmayı hedefler.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-stone-100">
            <div className="text-4xl mb-4 text-emerald-600">🌐</div>
            <h3 className="text-xl font-bold text-emerald-900 mb-3 font-serif">Ekolojik Sistem (Bronfenbrenner)</h3>
            <p className="text-stone-600 leading-relaxed">
              Çocuk bir fanusta büyümez. Aile (Mikrosistem), ailenin iş yeri ve okul (Mezosistem) ve ülkenin politikaları (Makrosistem) iç içedir. Erken müdahale sadece çocuğa değil, tüm sisteme (aileye destek, toplumsal politika) dokunmalıdır.
            </p>
          </div>
        </div>
      </div>

      <ReferenceBox references={[
        "Shonkoff, J. P., & Phillips, D. A. (Eds.). (2000). From neurons to neighborhoods: The science of early childhood development. National Academies Press.",
        "Sameroff, A. J., & Fiese, B. H. (2000). Transactional regulation: The developmental ecology of early intervention. In Handbook of early childhood intervention.",
        "Bronfenbrenner, U. (1979). The ecology of human development: Experiments by nature and design. Harvard University Press.",
        "Center on the Developing Child at Harvard University (2016). From Best Practices to Breakthrough Impacts."
      ]} />
    </div>
  );
};

// 3. Veriler (Data)
const DataSection = () => {
  // Chart 1: Heckman
  const heckmanData = {
    labels: ['Doğum Öncesi', '0-3 Yaş', 'Okul Öncesi', 'Okul Çağı', 'Meslek Eğitimi'],
    datasets: [{
      label: 'Yatırım Getirisi (ROI)',
      data: [10, 8.5, 6, 3, 1],
      fill: true,
      backgroundColor: 'rgba(13, 148, 136, 0.1)', // Teal
      borderColor: '#0d9488',
      tension: 0.4,
      pointRadius: 6
    }]
  };

  // Chart 2: Word Gap
  const wordGapData = {
    labels: ['Düşük Gelir Grubu', 'Orta Gelir Grubu', 'Yüksek Gelir Grubu'],
    datasets: [{
      label: '4 Yaşında Duyulan Toplam Kelime (Milyon)',
      data: [13, 26, 45],
      backgroundColor: ['#ef4444', '#f59e0b', '#10b981'],
      borderRadius: 8
    }]
  };

  // Chart 3: Abecedarian (New)
  const abecedarianData = {
    labels: ['Müdahale Grubu', 'Kontrol Grubu'],
    datasets: [
      {
        label: 'Üniversite Mezuniyet Oranı (%)',
        data: [23, 6],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
      },
      {
        label: 'Tam Zamanlı İstihdam (%)',
        data: [75, 53],
        backgroundColor: 'rgba(99, 102, 241, 0.8)',
      }
    ]
  };

  const options = { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' as const } } };

  return (
    <div className="animate-fade-in space-y-12">
      <SectionTitle
        title="Kanıta Dayalı Gerçekler"
        subtitle="Erken müdahalenin etkisi sadece duygusal değil, ölçülebilir ekonomik ve sosyolojik bir gerçektir."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Heckman */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-200">
          <h3 className="text-xl font-bold text-stone-800 mb-2 font-serif">Heckman Eğrisi</h3>
          <p className="text-sm text-stone-500 mb-6">Nobel ödüllü James Heckman'ın analizi: Yatırım yaşı geciktikçe getiri düşer.</p>
          <div className="h-72 w-full">
            <Line data={heckmanData} options={options} />
          </div>
          <div className="mt-6 p-4 bg-teal-50 text-teal-900 text-sm rounded-xl">
            <strong>Analiz:</strong> Okul öncesi dönemde (0-5 yaş) yapılan her 1$'lık yatırım, topluma (suç oranında düşüş, vergi geliri vb.) 7-13$ olarak geri döner.
          </div>
        </div>

        {/* Word Gap */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-200">
          <h3 className="text-xl font-bold text-stone-800 mb-2 font-serif">30 Milyon Kelime Farkı</h3>
          <p className="text-sm text-stone-500 mb-6">Hart & Risley (1995) çalışması: Sosyoekonomik düzeyin dil gelişimine etkisi.</p>
          <div className="h-72 w-full">
            <Bar data={wordGapData} options={options} />
          </div>
          <div className="mt-6 p-4 bg-orange-50 text-orange-900 text-sm rounded-xl">
            <strong>Gerçek:</strong> Bu fark "zeka" değil, "fırsat" farkıdır. Ebeveynle zengin etkileşim bu uçurumu kapatabilir.
          </div>
        </div>

        {/* Abecedarian */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-200 lg:col-span-2">
          <h3 className="text-xl font-bold text-stone-800 mb-2 font-serif">Abecedarian Projesi: Uzun Vadeli Etki</h3>
          <p className="text-sm text-stone-500 mb-6">Erken eğitimin 30'lu yaşlardaki sonuçları (Ramey & Ramey).</p>
          <div className="h-72 w-full">
            <Bar data={abecedarianData} options={options} />
          </div>
          <div className="mt-6 p-4 bg-blue-50 text-blue-900 text-sm rounded-xl">
            <strong>Sonuç:</strong> Yüksek kaliteli erken eğitim alan çocuklar, almayanlara göre üniversite bitirme oranında 4 kat, istihdamda ise belirgin üstünlük sağlamıştır.
          </div>
        </div>
      </div>

      <ReferenceBox references={[
        "Heckman, J. J. (2006). Skill formation and the economics of investing in disadvantaged children. Science, 312(5782), 1900-1902.",
        "Hart, B., & Risley, T. R. (1995). Meaningful differences in the everyday experience of young American children. Paul H Brookes Publishing.",
        "Ramey, C. T., & Ramey, S. L. (1998). Early intervention and early experience. American Psychologist, 53(2), 109.",
        "Campbell, F. A., et al. (2012). Adult outcomes as a function of an early childhood educational program: An Abecedarian Project follow-up. Developmental Psychology."
      ]} />
    </div>
  );
};

// 4. Süreç (Process)
const ProcessSection = () => {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "Şüphe ve İlk Gözlem",
      icon: "👀",
      content: "Her şey 'Bir şeyler yolunda gitmiyor mu?' hissiyle başlar. Bu aşamada 'Bekle ve gör' yaklaşımı en büyük hatadır. Aileler Denver II, ASQ gibi tarama araçlarıyla ön bilgi edinebilir. Kreş öğretmeninin gözlemleri ve evde çekilen videolar doktora gitmeden önce kritik verilerdir."
    },
    {
      id: 2,
      title: "Tıbbi Tanılama (ÇÖZGER)",
      icon: "🏥",
      content: "Resmi süreç hastanede başlar. Çocuk Psikiyatrisi veya Nörolojisi bölümlerine başvurulur. Heyet değerlendirmesi sonucu ÇÖZGER (Çocuklar İçin Özel Gereksinim Raporu) alınır. Bu rapor, çocuğun 'özel gereksinimi vardır (ÖGV)' ibaresini içerir ve yasal hakların kapısını açar."
    },
    {
      id: 3,
      title: "Eğitsel Değerlendirme (RAM)",
      icon: "🏫",
      content: "ÇÖZGER ile ilçenizdeki Rehberlik ve Araştırma Merkezi'ne (RAM) başvurulur. Burası hastane değil, eğitim kurumudur. Uzmanlar çocukla oyun temelli bir değerlendirme yapar ve hangi eğitimi, haftada kaç saat alması gerektiğini belirleyen 'Özel Eğitim Değerlendirme Kurul Raporu'nu çıkarır."
    },
    {
      id: 4,
      title: "BEP ve Eğitimin Başlaması",
      icon: "📝",
      content: "RAM raporu ile devlet destekli bir Özel Eğitim Merkezi seçilir. Burada çocuğa özel Bireyselleştirilmiş Eğitim Programı (BEP) hazırlanır. Hedefler somut olmalıdır (Örn: 'Ahmet 3 ay içinde nesne devamlılığını kazanacak'). Aile de bu sürecin aktif parçasıdır."
    },
    {
      id: 5,
      title: "Geçiş Dönemleri (Transitions)",
      icon: "bridge", // Custom logic handled below
      content: "Erken müdahaleden (0-3 yaş) okul öncesi özel eğitime (3-6 yaş) geçiş, aileler için stresli olabilir. Araştırmalar (Mahurin-Smith, 2022), bu dönemde 'boşluk' hissinin yaşandığını gösterir. Geçiş toplantıları ve yeni okulun önceden ziyaret edilmesi adaptasyonu kolaylaştırır."
    }
  ];

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <SectionTitle
        title="Adım Adım Yol Haritası"
        subtitle="Şüpheden eğitime, Türkiye'deki yasal ve eğitsel bürokrasi süreçleri."
      />

      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.id} className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <button
              onClick={() => setOpenStep(openStep === step.id ? null : step.id)}
              className="w-full px-8 py-6 text-left flex justify-between items-center bg-white hover:bg-stone-50 transition"
            >
              <div className="flex items-center gap-6">
                <span className="bg-stone-100 text-2xl w-14 h-14 rounded-full flex items-center justify-center border border-stone-200">
                  {step.icon === "bridge" ? "🌉" : step.icon}
                </span>
                <span className="font-bold text-stone-800 text-xl font-serif">{step.title}</span>
              </div>
              {openStep === step.id ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-stone-400" />}
            </button>

            {openStep === step.id && (
              <div className="px-8 py-6 text-stone-600 border-t border-stone-100 bg-stone-50/50 leading-relaxed text-lg animate-fade-in">
                {step.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <ReferenceBox references={[
        "Milli Eğitim Bakanlığı (MEB) Özel Eğitim Hizmetleri Yönetmeliği.",
        "Mahurin-Smith, J. (2022). Transitions out of Early Intervention: A qualitative investigation of families’ experiences. Infants & Young Children.",
        "Rous, B., et al. (2007). Strategies for supporting transitions of young children with special needs. Journal of Early Intervention."
      ]} />
    </div>
  );
};

// 5. Stratejiler (Strategies)
const StrategiesSection = () => {
  return (
    <div className="animate-fade-in space-y-16">
      <SectionTitle
        title="Uygulama Stratejileri"
        subtitle="Bilimsel teorileri evin içine nasıl taşırsınız? Sameroff'un 3R Kuralı ve Adaptif Ebeveynlik."
      />

      {/* Sameroff's 3Rs */}
      <div>
        <div className="flex items-center gap-3 mb-8 justify-center">
          <div className="h-px w-12 bg-teal-300"></div>
          <h3 className="text-2xl font-bold text-stone-800 font-serif">Sameroff'un 3R Kuralı</h3>
          <div className="h-px w-12 bg-teal-300"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-teal-500 hover:-translate-y-2 transition-transform">
            <h4 className="font-bold text-xl text-teal-800 mb-3">1. Remediation (Düzeltme)</h4>
            <p className="text-stone-600 mb-4 min-h-[80px]">Çocuğun davranışını veya becerisini doğrudan değiştirmeye yönelik fiziksel müdahale.</p>
            <div className="bg-teal-50 p-3 rounded-lg text-sm text-teal-900 italic">
              <strong>Örnek:</strong> Kasları güçlendirmek için fizik tedavi uygulamak veya konuşma terapisi.
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-orange-500 hover:-translate-y-2 transition-transform">
            <h4 className="font-bold text-xl text-orange-800 mb-3">2. Redefinition (Yeniden Tanımlama)</h4>
            <p className="text-stone-600 mb-4 min-h-[80px]">Ailenin çocuğun davranışına yüklediği anlamı değiştirmek (Çocuğu değil, bakış açısını düzelt).</p>
            <div className="bg-orange-50 p-3 rounded-lg text-sm text-orange-900 italic">
              <strong>Örnek:</strong> "Çocuğum bana gıcıklık olsun diye yemek yemiyor" yerine "Dokusal hassasiyeti var" demek.
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-indigo-500 hover:-translate-y-2 transition-transform">
            <h4 className="font-bold text-xl text-indigo-800 mb-3">3. Reeducation (Yeniden Eğitim)</h4>
            <p className="text-stone-600 mb-4 min-h-[80px]">Aileye yeni ebeveynlik becerileri ve çocuk gelişimi bilgisi öğretmek.</p>
            <div className="bg-indigo-50 p-3 rounded-lg text-sm text-indigo-900 italic">
              <strong>Örnek:</strong> Otizmli çocukla iletişim kurmak için aileye "Floortime" tekniğini öğretmek.
            </div>
          </div>
        </div>
      </div>

      {/* Adaptive Parenting */}
      <div className="bg-stone-800 text-stone-200 rounded-3xl p-10 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-stone-700 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
        <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-3xl font-bold text-white mb-2 font-serif">Adaptif Ebeveynlik</h3>
            <p className="text-stone-400 text-sm tracking-widest uppercase">Shonkoff & Meisels (Handbook of EI)</p>
          </div>
          <div className="md:w-2/3 border-l border-stone-600 pl-0 md:pl-10 space-y-6">
            <p className="text-lg text-stone-300 font-light italic">
              "Mükemmel ebeveyn yoktur, 'duyarlı' (responsive) ebeveyn vardır."
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                <span><strong>Sinyali Oku:</strong> Ağlaması açlık mı, korku mu, yoksa sadece yorgunluk (aşırı uyarılma) mu?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                <span><strong>Senkronize Ol:</strong> Çocuk oyun oynamak istiyorsa katıl, dinlenmek istiyorsa alan tanı (Reciprocity).</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-400 mt-1 flex-shrink-0" size={20} />
                <span><strong>Maladaptif Döngüden Kaçın:</strong> Ebeveyn stresi &rarr; Çocuğa yanlış tepki &rarr; Çocuğun stresinin artması.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ReferenceBox references={[
        "Sameroff, A. J., & Fiese, B. H. (2000). Transactional regulation. Handbook of early childhood intervention.",
        "Bagur, S., et al. (2023). Empowerment, anxiety and depression in families using early childhood intervention services. European Journal of Special Needs Education.",
        "Shonkoff, J. P., & Meisels, S. J. (Eds.). (2000). Handbook of early childhood intervention. Cambridge University Press."
      ]} />
    </div>
  );
};

// 6. Riskmetre (Interactive Checklist)
const RiskMeter = () => {
  const [activeAge, setActiveAge] = useState<AgeGroup>('0-6 Ay');
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  useEffect(() => setCheckedItems({}), [activeAge]);

  const handleCheck = (index: number) => {
    setCheckedItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const totalItems = RISK_DATA[activeAge].length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const percentage = Math.round((checkedCount / totalItems) * 100);

  let riskLevel = { color: 'bg-green-500', text: 'text-green-600', msg: 'Şu an için belirgin bir risk işareti yok. Gözlemlemeye devam edin.', bg: 'bg-green-50' };

  if (checkedCount === 1) {
    riskLevel = { color: 'bg-yellow-400', text: 'text-yellow-600', msg: 'Düşük Risk: 1 adet belirti var. Geçici olabilir ancak 2 hafta dikkatle gözlemleyin.', bg: 'bg-yellow-50' };
  } else if (checkedCount === 2) {
    riskLevel = { color: 'bg-orange-500', text: 'text-orange-600', msg: 'Orta Risk: Gelişimsel açıdan dikkat çeken noktalar var. Bir uzmana danışmanız önerilir.', bg: 'bg-orange-50' };
  } else if (checkedCount > 2) {
    riskLevel = { color: 'bg-red-600', text: 'text-red-600', msg: 'YÜKSEK RİSK: %' + percentage + ' oranında risk belirtisi. Vakit kaybetmeden Çocuk Nörolojisi veya Çocuk Psikiyatrisine başvurun.', bg: 'bg-red-50' };
  }

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <SectionTitle
        title="İnteraktif Gelişim Riskmetresi"
        subtitle="Erken tanı hayat kurtarır. Çocuğunuzun yaşına uygun belirtileri kontrol edin."
      />

      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8 flex items-start gap-4">
        <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={24} />
        <div>
          <h3 className="font-bold text-red-900 text-lg">Önemli Uyarı</h3>
          <p className="text-red-800 text-sm mt-1">
            Bu araç sadece farkındalık amaçlıdır, tıbbi tanı yerine geçmez. "Kırmızı Bayraklar" (Red Flags) uluslararası tarama kriterlerine (CDC, Guralnick) dayanmaktadır. Şüpheniz varsa doktora başvurunuz.
          </p>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-6 mb-2 justify-start md:justify-center">
        {(Object.keys(RISK_DATA) as AgeGroup[]).map(age => (
          <button
            key={age}
            onClick={() => setActiveAge(age)}
            className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold transition-all shadow-sm ${activeAge === age
              ? 'bg-stone-800 text-white shadow-lg scale-105'
              : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
          >
            {age}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
        <div className="p-8 bg-stone-50 border-b border-stone-200">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="font-bold text-2xl text-stone-800 font-serif">{activeAge} Gelişim Kontrolü</h3>
              <p className="text-stone-500">Aşağıdaki durumlardan gözlemlediklerinizi işaretleyiniz:</p>
            </div>
            <div className="text-right">
              <span className="block text-xs font-bold uppercase text-stone-400 tracking-widest">Risk Skoru</span>
              <span className={`text-4xl font-bold transition-colors ${riskLevel.text}`}>%{percentage}</span>
            </div>
          </div>

          <div className="w-full bg-stone-200 rounded-full h-4 overflow-hidden shadow-inner relative">
            <div
              className={`h-full transition-all duration-700 ease-out rounded-full ${riskLevel.color}`}
              style={{ width: `${percentage === 0 ? 5 : percentage}%` }}
            ></div>
          </div>
        </div>

        <div className="p-8 space-y-4">
          {RISK_DATA[activeAge].map((item: string, idx: number) => (
            <label key={idx} className={`flex items-start gap-4 cursor-pointer p-4 rounded-xl transition-all border ${checkedItems[idx] ? 'bg-red-50 border-red-200' : 'bg-white border-transparent hover:bg-stone-50 hover:border-stone-200'}`}>
              <div className={`w-6 h-6 rounded border-2 flex items-center justify-center mt-0.5 flex-shrink-0 transition-colors ${checkedItems[idx] ? 'bg-red-500 border-red-500' : 'border-stone-300 bg-white'}`}>
                {checkedItems[idx] && <CheckCircle size={16} className="text-white" />}
              </div>
              <input
                type="checkbox"
                className="hidden"
                checked={!!checkedItems[idx]}
                onChange={() => handleCheck(idx)}
              />
              <span className={`text-lg select-none ${checkedItems[idx] ? 'text-red-900 font-medium' : 'text-stone-600'}`}>{item}</span>
            </label>
          ))}
        </div>

        <div className={`p-8 border-t border-stone-200 transition-colors duration-500 ${riskLevel.bg}`}>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full bg-white/50 ${riskLevel.text}`}>
              <Activity size={24} />
            </div>
            <div>
              <span className={`block font-bold text-lg ${riskLevel.text}`}>Analiz Sonucu:</span>
              <span className="text-stone-700 font-medium">{riskLevel.msg}</span>
            </div>
          </div>
        </div>
      </div>

      <ReferenceBox references={[
        "CDC (2022). Learn the Signs. Act Early.",
        "Guralnick, M. J. (2000). Interdisciplinary Clinical Assessment of Young Children with Developmental Disabilities.",
        "American Academy of Pediatrics (AAP) Developmental Surveillance Guidelines."
      ]} />
    </div>
  );
};

// --- ANA UYGULAMA (ROOT) ---

const App = () => {
  const [activeTab, setActiveTab] = useState('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  }, [activeTab]);

  const navItems = [
    { id: 'landing', label: 'Ana Sayfa', icon: <Zap size={18} /> },
    { id: 'science', label: 'Bilim', icon: <Brain size={18} /> },
    { id: 'riskmetre', label: 'Riskmetre', icon: <Activity size={18} /> },
    { id: 'data', label: 'Veriler', icon: <BarChart2 size={18} /> },
    { id: 'process', label: 'Süreç', icon: <Map size={18} /> },
    { id: 'strategies', label: 'Stratejiler', icon: <BookOpen size={18} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'landing': return <LandingPage setActiveTab={setActiveTab} />;
      case 'science': return <ScienceSection />;
      case 'riskmetre': return <RiskMeter />;
      case 'data': return <DataSection />;
      case 'process': return <ProcessSection />;
      case 'strategies': return <StrategiesSection />;
      default: return <LandingPage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] font-sans text-stone-900 flex flex-col selection:bg-orange-200">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div
              className="flex items-center cursor-pointer gap-2 group"
              onClick={() => setActiveTab('landing')}
            >
              <div className="w-10 h-10 bg-gradient-to-tr from-orange-500 to-amber-300 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
                <Zap size={24} fill="currentColor" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-stone-800 leading-none font-serif tracking-tight">Erken Müdahale</h1>
                <span className="text-[10px] text-stone-500 font-bold tracking-[0.2em] uppercase">Platformu</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex space-x-1 bg-stone-100 p-1 rounded-full border border-stone-200">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === item.id
                    ? 'bg-white text-stone-800 shadow-md transform scale-105'
                    : 'text-stone-500 hover:text-stone-800 hover:bg-stone-200/50'
                    }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-stone-600 hover:bg-stone-100 transition"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 absolute w-full shadow-2xl animate-fade-in">
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-xl text-left font-bold text-lg transition ${activeTab === item.id
                    ? 'bg-stone-100 text-orange-600 border-l-4 border-orange-500'
                    : 'text-stone-500 hover:bg-stone-50'
                    }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 mt-auto border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          <div>
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Zap size={18} className="text-orange-500" /> Erken Müdahale
            </h4>
            <p className="leading-relaxed">
              Bu platform, aileler ve eğitimciler için bilimsel temelli farkındalık oluşturmak amacıyla tasarlanmıştır. İçerikler Guralnick, Shonkoff ve Ramey'in çalışmalarına dayanır.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2">
              <li onClick={() => setActiveTab('riskmetre')} className="hover:text-orange-400 cursor-pointer transition">Risk Analizi</li>
              <li onClick={() => setActiveTab('science')} className="hover:text-orange-400 cursor-pointer transition">Bilimsel Temeller</li>
              <li onClick={() => setActiveTab('process')} className="hover:text-orange-400 cursor-pointer transition">Yasal Süreçler</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Yasal Uyarı</h4>
            <div className="bg-stone-800 p-4 rounded-lg border border-stone-700">
              <p>
                Bu sitedeki bilgiler tıbbi tanı veya tedavi yerine geçmez. Çocuğunuzun gelişimiyle ilgili endişeleriniz varsa lütfen vakit kaybetmeden bir uzmana danışınız.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-stone-800 text-xs text-stone-600">
          © 2024 Erken Müdahale Platformu. Tüm Hakları Saklıdır.
        </div>
      </footer>
    </div>
  );
};

export default App;