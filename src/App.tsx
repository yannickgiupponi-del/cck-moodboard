import { useState, useEffect, useRef, useCallback } from "react";

/* ─── RESPONSIVE HOOK ─── */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [breakpoint]);
  return isMobile;
}

const sections = [
  "diagnostic",
  "direction",
  "palette",
  "typo",
  "univers",
  "logo",
  "applications",
] as const;

type Section = (typeof sections)[number];

const sectionLabels: Record<Section, string> = {
  diagnostic: "Diagnostic",
  direction: "Nouvelle Direction",
  palette: "Palette",
  typo: "Typographie",
  univers: "Univers Visuel",
  logo: "Logo & Marque",
  applications: "Applications",
};

export default function MoodBoard() {
  const [active, setActive] = useState<Section>("diagnostic");
  const m = useIsMobile();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#f0e8d8",
        fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a1e 40%, #0a0a1e 60%, #0a0a0a 100%)",
          borderBottom: "1px solid #2a2a3a",
          padding: m ? "20px 16px 0" : "32px 24px 0",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
            <span style={{ fontSize: m ? 11 : 13, color: "#888", letterSpacing: m ? 2 : 4 }}>DIRECTION ARTISTIQUE</span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #444, transparent)" }} />
          </div>
          <h1
            style={{
              fontSize: m ? 26 : 42,
              fontWeight: 800,
              margin: "0 0 4px",
              background: "linear-gradient(90deg, #e84040, #c840d8, #4080ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: -1,
              lineHeight: 1.2,
            }}
          >
            CACHE CACHE KILLER
          </h1>
          <p style={{ fontSize: m ? 13 : 16, color: "#999", margin: m ? "0 0 16px" : "0 0 24px", fontStyle: "italic" }}>
            Mood Board — De l'horreur pure au "Dark Carnival Fun"
          </p>
          <TabNav sections={sections} active={active} onSelect={setActive} isMobile={m} />
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: m ? "20px 16px" : "32px 24px" }}>
        {active === "diagnostic" && <DiagnosticSection />}
        {active === "direction" && <DirectionSection />}
        {active === "palette" && <PaletteSection />}
        {active === "typo" && <TypoSection />}
        {active === "univers" && <UniversSection />}
        {active === "logo" && <LogoSection />}
        {active === "applications" && <ApplicationsSection />}
      </div>
    </div>
  );
}

function DiagnosticSection() {
  const m = useIsMobile();
  return (
    <div>
      <SectionTitle>Le problème de la DA actuelle</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? 20 : 32, marginBottom: m ? 28 : 40 }}>
        <Card accent="#e84040" title="Ce qu'on a aujourd'hui">
          <TagList tags={[
            { label: "Gothic médiéval", color: "#e84040" },
            { label: "Horror pur", color: "#e84040" },
            { label: "Sérieux / sombre", color: "#e84040" },
            { label: "Typographie médiévale", color: "#e84040" },
          ]} />
          <p style={{ color: "#aaa", lineHeight: 1.7, marginTop: 12, fontSize: m ? 13 : undefined }}>
            L'univers visuel actuel est ancré dans un registre <strong style={{ color: "#e84040" }}>horreur cinématographique</strong> :
            silhouettes menaçantes, fumées, ambiance Dead by Daylight.
            C'est beau, c'est angoissant… mais c'est <em>trop sérieux</em>.
            On a l'impression d'entrer dans un film d'horreur, pas dans un jeu.
          </p>
          <p style={{ color: "#888", lineHeight: 1.7, fontSize: m ? 13 : undefined }}>
            Le logo gothique + diamants évoque plus un groupe de metal ou un escape game premium
            qu'un concept ludique et social. Il ne communique ni le fun, ni l'énergie, ni le cirque.
          </p>
        </Card>
        <Card accent="#4080ff" title="Ce qu'on veut transmettre">
          <TagList tags={[
            { label: "Fun & Frissons", color: "#4080ff" },
            { label: "Énergie sociale", color: "#c840d8" },
            { label: "Accessible tout public", color: "#40c8a0" },
            { label: "Cirque & Spectacle", color: "#f0a030" },
          ]} />
          <p style={{ color: "#aaa", lineHeight: 1.7, marginTop: 12, fontSize: m ? 13 : undefined }}>
            CCK est un <strong style={{ color: "#4080ff" }}>jeu social</strong> avant d'être une expérience d'horreur.
            C'est le cache-cache de votre enfance, survitaminé, dans un cirque qui a mal tourné.
            On crie, on rit, on se cache, on court — c'est <em>excitant</em>, pas traumatisant.
          </p>
          <p style={{ color: "#888", lineHeight: 1.7, fontSize: m ? 13 : undefined }}>
            Le public cible (18-35) veut une sortie mémorable entre potes,
            pas une épreuve psychologique. L'ambiance doit dire : "viens jouer" avant "aie peur".
          </p>
        </Card>
      </div>
      <SectionTitle>L'équation à résoudre</SectionTitle>
      <div style={{ background: "linear-gradient(135deg, #1a1a2a, #1e1428)", borderRadius: m ? 12 : 16, padding: m ? 20 : 32, textAlign: "center", border: "1px solid #2a2a3a" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: m ? 10 : 20, flexWrap: "wrap" }}>
          <Pill color="#e84040" size={m ? "small" : "large"}>🎃 Angoissant</Pill>
          <span style={{ fontSize: m ? 20 : 28, color: "#666" }}>+</span>
          <Pill color="#f0a030" size={m ? "small" : "large"}>🎪 Cirque</Pill>
          <span style={{ fontSize: m ? 20 : 28, color: "#666" }}>+</span>
          <Pill color="#4080ff" size={m ? "small" : "large"}>🎮 Ludique</Pill>
          <span style={{ fontSize: m ? 20 : 28, color: "#666" }}>=</span>
          <Pill color="#c840d8" size={m ? "small" : "large"}>✨ DARK CARNIVAL FUN</Pill>
        </div>
        <p style={{ color: "#888", marginTop: m ? 14 : 20, fontSize: m ? 12 : 15 }}>
          Pensez : <strong style={{ color: "#ccc" }}>Beetlejuice</strong> ×{" "}
          <strong style={{ color: "#ccc" }}>Five Nights at Freddy's</strong> ×{" "}
          <strong style={{ color: "#ccc" }}>Killer Klowns from Outer Space</strong> ×{" "}
          <strong style={{ color: "#ccc" }}>The Night Circus</strong>
        </p>
      </div>
    </div>
  );
}

function DirectionSection() {
  const m = useIsMobile();
  return (
    <div>
      <SectionTitle>Le concept : "Dark Carnival Fun"</SectionTitle>
      <p style={{ color: "#aaa", lineHeight: 1.8, fontSize: m ? 14 : 16, marginBottom: m ? 20 : 32, maxWidth: 800 }}>
        On ne cherche pas à supprimer l'obscurité — on cherche à y injecter de la <strong style={{ color: "#f0a030" }}>lumière foraine</strong>,
        du <strong style={{ color: "#c840d8" }}>spectacle</strong> et du <strong style={{ color: "#40c8a0" }}>fun chaotique</strong>.
        L'ambiance idéale, c'est un carnaval nocturne où tout va un peu trop vite, les lumières clignotent,
        les rires se mêlent aux cris — et quelque part dans le noir, quelqu'un vous cherche.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr 1fr", gap: m ? 16 : 24, marginBottom: m ? 28 : 40 }}>
        <ConceptCard icon="🎪" title="Le Cirque Maudit" description="Un cirque ambulant qui s'est installé dans votre ville et ne veut plus partir. Les attractions tournent encore, mais les artistes ont… changé." keywords={["Chapiteau", "Attractions détraquées", "Manèges", "Guirlandes", "Confettis noirs"]} />
        <ConceptCard icon="🃏" title="Le Maître du Jeu" description="Le Tueur n'est pas un monstre — c'est un showman. Un Maître de Cérémonie qui a décidé que VOUS êtes le spectacle." keywords={["Showman", "Théâtral", "Charismatique", "Imprévisible", "Performer"]} />
        <ConceptCard icon="⚡" title="Le Jeu avant la Peur" description="Chaque élément visuel doit donner envie de jouer. Les affiches sont des invitations, pas des avertissements." keywords={["Excitation", "Défi", "Énergie", "Social", "Rejouabilité"]} />
      </div>
      <SectionTitle>Les 5 piliers visuels</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(5, 1fr)", gap: 16 }}>
        {[
          { num: "01", title: "Nuit Foraine", desc: "Ambiance de fête foraine nocturne — néons, guirlandes, lumières qui percent l'obscurité", color: "#f0a030" },
          { num: "02", title: "Dualité Fun/Peur", desc: "Chaque élément a deux lectures : amusant au premier regard, inquiétant au second", color: "#c840d8" },
          { num: "03", title: "Bleu vs Rouge", desc: "Le duel Survivants/Tueurs reste central mais s'enrichit de dorés et de néons", color: "#4080ff" },
          { num: "04", title: "Illustré > Photo", desc: "Un style plus graphique, illustré, presque bande dessinée — pas du photoréalisme sombre", color: "#40c8a0" },
          { num: "05", title: "Mouvement & Énergie", desc: "Tout est dynamique : typos en mouvement, confettis, étincelles, fumées colorées", color: "#e84040" },
        ].map((p) => (
          <div key={p.num} style={{ background: "#141420", borderRadius: 12, padding: m ? 16 : 20, borderTop: `3px solid ${p.color}` }}>
            <span style={{ fontSize: m ? 22 : 28, fontWeight: 900, color: p.color, opacity: 0.4 }}>{p.num}</span>
            <h4 style={{ margin: "8px 0 8px", fontSize: m ? 14 : 15, color: "#fff" }}>{p.title}</h4>
            <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PaletteSection() {
  const m = useIsMobile();
  return (
    <div>
      <SectionTitle>Palette de couleurs — Évolution</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? 24 : 32, marginBottom: m ? 28 : 40 }}>
        <div>
          <h3 style={{ color: "#888", fontSize: 13, letterSpacing: 2, marginBottom: 16 }}>AVANT — PALETTE ACTUELLE</h3>
          <div style={{ display: "flex", gap: 8 }}>
            {[{ hex: "#0a0a0a", name: "Noir profond" }, { hex: "#1a3a6a", name: "Bleu sombre" }, { hex: "#8a1a1a", name: "Rouge sang" }, { hex: "#f0e8d8", name: "Crème" }].map((c) => (<ColorSwatch key={c.hex} {...c} />))}
          </div>
          <p style={{ color: "#666", fontSize: 13, marginTop: 12 }}>Froide. Sérieuse. Cinématographique. Pas de chaleur, pas de fun.</p>
        </div>
        <div>
          <h3 style={{ color: "#c840d8", fontSize: 13, letterSpacing: 2, marginBottom: 16 }}>✦ APRÈS — DARK CARNIVAL</h3>
          <div style={{ display: "grid", gridTemplateColumns: m ? "repeat(3, 1fr)" : "repeat(6, 1fr)", gap: 8 }}>
            {[{ hex: "#0c0c14", name: "Noir nuit" }, { hex: "#e84040", name: "Rouge cirque" }, { hex: "#3070e8", name: "Bleu électrique" }, { hex: "#f0a030", name: "Or forain" }, { hex: "#c840d8", name: "Violet néon" }, { hex: "#f0e8d8", name: "Crème chaud" }].map((c) => (<ColorSwatch key={c.hex} {...c} />))}
          </div>
          <p style={{ color: "#999", fontSize: 13, marginTop: 12 }}>Plus riche. L'or et le violet ajoutent le <strong>spectacle</strong>. Le rouge et bleu restent mais sont plus <strong>vifs, électriques</strong>.</p>
        </div>
      </div>
      <SectionTitle>Rôle de chaque couleur</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
        <ColorRole hex="#e84040" name="Rouge Cirque" role="Camp Tueurs — Danger, spectacle, rideau de scène" usage="Éléments tueurs, alertes, accents primaires, tentes" />
        <ColorRole hex="#3070e8" name="Bleu Électrique" role="Camp Survivants — Adrénaline, survie, lumière dans le noir" usage="Éléments survivants, UI interactive, générateurs" />
        <ColorRole hex="#f0a030" name="Or Forain" role="LE CIRQUE — Spectacle, lumière, invitation, fun" usage="Titres, accents décoratifs, guirlandes, étoiles, CTA" />
        <ColorRole hex="#c840d8" name="Violet Néon" role="LA MAGIE — Mystère, le surnaturel derrière le cirque" usage="Accents secondaires, effets spéciaux, gamification" />
        <ColorRole hex="#0c0c14" name="Noir Nuit" role="LA SCÈNE — Le vide, le terrain de jeu, l'inconnu" usage="Fonds, espaces négatifs, contraste" />
        <ColorRole hex="#f0e8d8" name="Crème Chaud" role="LE PUBLIC — Lisibilité, humanité, chaleur" usage="Texte principal, éléments UI clairs" />
      </div>
      <div style={{ marginTop: m ? 24 : 32 }}>
        <h3 style={{ color: "#888", fontSize: 13, letterSpacing: 2, marginBottom: 16 }}>AMBIANCES LUMINEUSES</h3>
        <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr 1fr", gap: 16 }}>
          <GradientBox gradient="linear-gradient(135deg, #0c0c14, #2a1030, #e84040)" label="Territoire Tueur" />
          <GradientBox gradient="linear-gradient(135deg, #0c0c14, #0a1a3a, #3070e8)" label="Territoire Survivant" />
          <GradientBox gradient="linear-gradient(135deg, #1a0a20, #c840d8, #f0a030)" label="Le Cirque (ambiance festive)" />
        </div>
      </div>
    </div>
  );
}

function TypoSection() {
  const m = useIsMobile();
  return (
    <div>
      <SectionTitle>Direction Typographique</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? 20 : 32, marginBottom: m ? 28 : 40 }}>
        <Card accent="#e84040" title="❌ Avant : Gothique Médiéval">
          <div style={{ fontSize: m ? 24 : 36, fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 700, color: "#f0e8d8", fontStyle: "italic", margin: "16px 0", letterSpacing: 2 }}>Cache Cache Killer</div>
          <p style={{ color: "#888", fontSize: m ? 12 : 13, lineHeight: 1.6 }}>La typographie gothique/médiévale actuelle évoque le Moyen-Âge, le dark fantasy, les jeux de rôle sombres. C'est élégant mais froid, et ça ne dit ni "cirque" ni "fun".</p>
        </Card>
        <Card accent="#f0a030" title="✦ Après : Carnival Display Bold">
          <div style={{ fontSize: m ? 26 : 38, fontFamily: "'Impact', 'Arial Black', sans-serif", fontWeight: 900, color: "#f0e8d8", margin: "16px 0", letterSpacing: m ? 1 : 3, textTransform: "uppercase", textShadow: "0 0 20px rgba(240,160,48,0.3), 2px 2px 0 #e84040" }}>CACHE CACHE KILLER</div>
          <p style={{ color: "#999", fontSize: m ? 12 : 13, lineHeight: 1.6 }}>Direction : typographie <strong>bold, large, spectaculaire</strong> inspirée des affiches de cirque et de fête foraine.</p>
        </Card>
      </div>
      <SectionTitle>Hiérarchie Typographique Proposée</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr 1fr", gap: m ? 16 : 24 }}>
        <div style={{ background: "#141420", borderRadius: 12, padding: m ? 16 : 24 }}>
          <span style={{ fontSize: 11, color: "#f0a030", letterSpacing: 2 }}>TITRES / LOGO</span>
          <div style={{ fontSize: m ? 20 : 28, fontWeight: 900, fontFamily: "'Impact', sans-serif", textTransform: "uppercase", letterSpacing: 2, marginTop: 12, color: "#fff" }}>CIRCUS SLAB / DISPLAY</div>
          <p style={{ color: "#777", fontSize: 12, marginTop: 12, lineHeight: 1.6 }}>Références : Barnum, Showtime, Circus Didot, Playfair Display Black.</p>
        </div>
        <div style={{ background: "#141420", borderRadius: 12, padding: m ? 16 : 24 }}>
          <span style={{ fontSize: 11, color: "#c840d8", letterSpacing: 2 }}>SOUS-TITRES / ACCROCHES</span>
          <div style={{ fontSize: m ? 18 : 22, fontWeight: 600, fontFamily: "sans-serif", marginTop: 12, color: "#fff", fontStyle: "italic" }}>Condensed Sans Bold Italic</div>
          <p style={{ color: "#777", fontSize: 12, marginTop: 12, lineHeight: 1.6 }}>Références : Oswald Bold, Bebas Neue, Barlow Condensed Bold.</p>
        </div>
        <div style={{ background: "#141420", borderRadius: 12, padding: m ? 16 : 24 }}>
          <span style={{ fontSize: 11, color: "#4080ff", letterSpacing: 2 }}>CORPS / UI</span>
          <div style={{ fontSize: 16, fontWeight: 400, fontFamily: "sans-serif", marginTop: 12, color: "#fff" }}>Clean sans-serif lisible</div>
          <p style={{ color: "#777", fontSize: 12, marginTop: 12, lineHeight: 1.6 }}>Références : Inter, DM Sans, Plus Jakarta Sans.</p>
        </div>
      </div>
      <div style={{ marginTop: m ? 24 : 32, background: "linear-gradient(135deg, #0c0c14, #1a0a20)", borderRadius: m ? 12 : 16, padding: m ? 20 : 32, textAlign: "center", border: "1px solid #2a2a3a" }}>
        <span style={{ fontSize: 11, color: "#f0a030", letterSpacing: 3 }}>✦ BIENVENUE AU ✦</span>
        <div style={{ fontSize: m ? 28 : 52, fontWeight: 900, fontFamily: "'Impact', 'Arial Black', sans-serif", textTransform: "uppercase", letterSpacing: m ? 1 : 4, margin: "8px 0", color: "#f0e8d8", textShadow: "0 0 40px rgba(200,64,216,0.3)" }}>CACHE CACHE KILLER</div>
        <div style={{ fontSize: m ? 14 : 18, fontWeight: 600, fontFamily: "sans-serif", color: "#c840d8", fontStyle: "italic", letterSpacing: m ? 1 : 2 }}>LE CIRQUE NE FERME JAMAIS.</div>
        <div style={{ fontSize: m ? 12 : 14, fontFamily: "sans-serif", color: "#888", marginTop: m ? 12 : 16 }}>Réservez votre session · Survivants vs Tueurs · De 3 à 10 joueurs</div>
      </div>
    </div>
  );
}

function UniversSection() {
  const m = useIsMobile();
  return (
    <div>
      <SectionTitle>Univers Visuel — Éléments Clés</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? 16 : 24, marginBottom: m ? 28 : 40 }}>
        <MoodCard title="🎪 Décor : Le Cirque de Minuit" items={["Chapiteaux rayés rouge & noir", "Guirlandes lumineuses, ampoules nues, néons", "Affiches vintage de \"freakshow\"", "Confettis, serpentins, ballons dégonflés", "Manèges figés, attractions détraquées", "Rayures de cirque comme motif récurrent"]} />
        <MoodCard title="🎭 Personnages : Performers, pas Monstres" items={["Les Tueurs sont des artistes de cirque corrompus", "Charisme et signature visuelle forte", "Survivants en tenues de spectateurs/stagiaires", "Costumes iconiques, reconnaissables en silhouette", "Masques expressifs : sourires figés, maquillages", "Style cartoon/stylisé — accessible, mémorable"]} />
        <MoodCard title="✨ Effets Visuels & Textures" items={["Fumées colorées : bleu survivants, rouge tueurs", "Confettis et paillettes dans les visuels", "Effets néon, lueurs chaudes, halos lumineux", "Textures : bois peint, toile de chapiteau, métal rouillé", "Étoiles, losanges, motifs de cartes à jouer", "Grain vintage / affiche usée"]} />
        <MoodCard title="🎬 Ton & Atmosphère" items={["\"Bienvenue au plus grand spectacle de votre vie…\"", "Le MC s'adresse au public avec ironie et panache", "Annonces façon fête foraine", "Musique : orgue de Barbarie + synthwave", "Ton JOUEUR : on taquine, on défie, on provoque", "Jamais gore — toujours du spectacle"]} />
      </div>
      <SectionTitle>Références & Inspirations</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(4, 1fr)", gap: 16 }}>
        {[
          { title: "Killer Klowns from Outer Space", desc: "L'horreur fun par excellence. Couleurs saturées, ambiance foraine.", what: "Le ton, la dualité fun/peur" },
          { title: "Five Nights at Freddy's", desc: "Horror accessible, mascots corrompues, esthétique enfantine.", what: "L'accessibilité, les mascottes" },
          { title: "Beetlejuice", desc: "Rayures, néon, chaos visuel maîtrisé.", what: "Les rayures, le chaos contrôlé" },
          { title: "The Night Circus", desc: "Cirque mystérieux, élégant, magnétique.", what: "L'élégance, le mystère" },
        ].map((ref) => (
          <div key={ref.title} style={{ background: "#141420", borderRadius: 12, padding: m ? 16 : 20, border: "1px solid #2a2a3a" }}>
            <h4 style={{ fontSize: 14, color: "#f0a030", margin: "0 0 8px" }}>{ref.title}</h4>
            <p style={{ fontSize: 12, color: "#999", lineHeight: 1.6, margin: "0 0 12px" }}>{ref.desc}</p>
            <span style={{ fontSize: 11, color: "#c840d8" }}>→ On prend : {ref.what}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoSection() {
  const m = useIsMobile();
  return (
    <div>
      <SectionTitle>Direction Logo — Principes</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr 1fr", gap: m ? 16 : 24, marginBottom: m ? 28 : 40 }}>
        <Card accent="#e84040" title="Piste 1 : Le Chapiteau">
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <div style={{ fontSize: 14, color: "#f0a030", letterSpacing: 3 }}>✦ ✦ ✦</div>
            <div style={{ fontSize: m ? 26 : 32, fontWeight: 900, fontFamily: "'Impact', sans-serif", textTransform: "uppercase", letterSpacing: 2, color: "#fff", textShadow: "2px 2px 0 #e84040" }}>CCK</div>
            <div style={{ width: 80, height: 3, background: "#e84040", margin: "8px auto", borderRadius: 2 }} />
            <div style={{ fontSize: 10, letterSpacing: 4, color: "#f0a030" }}>CACHE CACHE KILLER</div>
          </div>
          <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>Le monogramme CCK dans un cadre inspiré d'un fronton de chapiteau.</p>
        </Card>
        <Card accent="#c840d8" title="Piste 2 : Le Ticket d'Entrée">
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <div style={{ display: "inline-block", border: "2px dashed #c840d8", borderRadius: 8, padding: m ? "10px 16px" : "12px 24px", background: "rgba(200,64,216,0.05)" }}>
              <div style={{ fontSize: 9, letterSpacing: 3, color: "#c840d8" }}>ADMIT ONE</div>
              <div style={{ fontSize: m ? 20 : 26, fontWeight: 900, fontFamily: "'Impact', sans-serif", textTransform: "uppercase", color: "#fff" }}>CACHE CACHE</div>
              <div style={{ fontSize: m ? 16 : 20, fontWeight: 900, color: "#e84040", fontFamily: "'Impact', sans-serif" }}>KILLER</div>
            </div>
          </div>
          <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>Le logo comme un ticket de spectacle / billet d'entrée.</p>
        </Card>
        <Card accent="#f0a030" title="Piste 3 : La Mascotte">
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <div style={{ fontSize: m ? 36 : 48, marginBottom: 4 }}>🃏</div>
            <div style={{ fontSize: m ? 18 : 22, fontWeight: 900, fontFamily: "'Impact', sans-serif", textTransform: "uppercase", letterSpacing: 1, color: "#fff" }}>CACHE CACHE</div>
            <div style={{ fontSize: m ? 14 : 16, fontWeight: 900, color: "#e84040", letterSpacing: 3, fontFamily: "'Impact', sans-serif" }}>K I L L E R</div>
          </div>
          <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>Un personnage iconique intégré au logo. Crée de l'attachement et du merch.</p>
        </Card>
      </div>
      <SectionTitle>Éléments graphiques récurrents</SectionTitle>
      <div style={{ display: "flex", gap: m ? 8 : 16, flexWrap: "wrap" }}>
        {["★ Étoiles", "◆ Losanges", "⚡ Éclairs", "🎪 Chapiteau", "🎟️ Ticket", "🃏 Cartes", "↺ Spirales", "✂ Rayures"].map((e) => (
          <span key={e} style={{ background: "#1a1a2a", border: "1px solid #2a2a3a", borderRadius: 8, padding: m ? "6px 10px" : "8px 16px", fontSize: m ? 11 : 13, color: "#ccc" }}>{e}</span>
        ))}
      </div>
    </div>
  );
}

function ApplicationsSection() {
  const m = useIsMobile();
  return (
    <div>
      <SectionTitle>Applications — Avant / Après</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? 20 : 32, marginBottom: m ? 28 : 40 }}>
        <Card accent="#4080ff" title="Site Web — Hero Section">
          <div style={{ background: "linear-gradient(180deg, #0c0c14, #1a0a20)", borderRadius: 8, padding: m ? 16 : 24, textAlign: "center", border: "1px solid #2a2a3a", marginTop: 12 }}>
            <div style={{ fontSize: 10, letterSpacing: 4, color: "#f0a030" }}>✦ BIENVENUE AU ✦</div>
            <div style={{ fontSize: m ? 20 : 28, fontWeight: 900, fontFamily: "'Impact', sans-serif", textTransform: "uppercase", letterSpacing: m ? 1 : 2, color: "#f0e8d8", margin: "4px 0" }}>CACHE CACHE KILLER</div>
            <div style={{ fontSize: 12, color: "#c840d8", fontStyle: "italic", marginBottom: 16 }}>Le cirque ne ferme jamais.</div>
            <div style={{ display: "inline-block", background: "linear-gradient(90deg, #e84040, #c840d8)", color: "#fff", fontWeight: 700, padding: m ? "8px 16px" : "10px 24px", borderRadius: 8, fontSize: m ? 11 : 13, letterSpacing: 1 }}>🎟️ RÉSERVER MA SESSION</div>
            <div style={{ fontSize: 11, color: "#666", marginTop: 12 }}>3 à 10 joueurs · Survivants vs Tueurs · 20 min / partie</div>
          </div>
        </Card>
        <Card accent="#c840d8" title="Post Instagram / TikTok">
          <div style={{ background: "linear-gradient(135deg, #1a0a20, #0c0c14, #1a1030)", borderRadius: 8, padding: m ? 16 : 24, textAlign: "center", border: "1px solid #2a2a3a", marginTop: 12 }}>
            <div style={{ fontSize: 10, letterSpacing: 3, color: "#e84040" }}>🔴 LIVE</div>
            <div style={{ fontSize: m ? 18 : 22, fontWeight: 900, fontFamily: "'Impact', sans-serif", textTransform: "uppercase", color: "#fff", margin: "8px 0" }}>LA SAISON 2 EST LÀ.</div>
            <div style={{ fontSize: m ? 28 : 36, margin: "8px 0" }}>🎪</div>
            <div style={{ fontSize: 13, color: "#f0a030", fontWeight: 600 }}>Nouveau tueur. Nouvelles règles.</div>
            <div style={{ fontSize: 11, color: "#888", marginTop: 8 }}>Qui survivra au Magicien ? 🃏</div>
            <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
              <span style={{ background: "#e84040", color: "#fff", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 600 }}>#CacheKiller</span>
              <span style={{ background: "#3070e8", color: "#fff", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 600 }}>#DarkCarnival</span>
            </div>
          </div>
        </Card>
        <Card accent="#f0a030" title="Billet / Confirmation Réservation">
          <div style={{ background: "#141420", borderRadius: 8, padding: m ? 16 : 20, border: "2px dashed #f0a030", marginTop: 12, display: "grid", gridTemplateColumns: m ? "1fr" : "1fr auto", gap: 16 }}>
            <div>
              <div style={{ fontSize: 9, letterSpacing: 3, color: "#f0a030" }}>CACHE CACHE KILLER</div>
              <div style={{ fontSize: m ? 16 : 18, fontWeight: 700, color: "#fff", margin: "4px 0" }}>Session du 15/03/2026</div>
              <div style={{ fontSize: 12, color: "#888" }}>19h30 · 6 joueurs · Format DUO</div>
              <div style={{ fontSize: 12, color: "#c840d8", marginTop: 4 }}>Camp : Survivants 💙</div>
            </div>
            <div style={{ textAlign: "center", borderLeft: m ? "none" : "1px dashed #333", borderTop: m ? "1px dashed #333" : "none", paddingLeft: m ? 0 : 16, paddingTop: m ? 12 : 0 }}>
              <div style={{ fontSize: m ? 22 : 28, fontWeight: 900, color: "#f0a030" }}>N°</div>
              <div style={{ fontSize: m ? 22 : 28, fontWeight: 900, color: "#fff" }}>247</div>
            </div>
          </div>
        </Card>
        <Card accent="#40c8a0" title="Écran Classement (in-situ)">
          <div style={{ background: "#0c0c14", borderRadius: 8, padding: m ? 16 : 20, border: "1px solid #2a2a3a", marginTop: 12 }}>
            <div style={{ textAlign: "center", marginBottom: 12 }}><span style={{ fontSize: 10, letterSpacing: 3, color: "#f0a030" }}>🏆 CLASSEMENT DU MOIS 🏆</span></div>
            {[{ rank: "🥇", name: "DarkJ0ker", score: 2840, color: "#f0a030" }, { rank: "🥈", name: "SurvivorQueen", score: 2650, color: "#ccc" }, { rank: "🥉", name: "NightRunner", score: 2410, color: "#c87830" }].map((p) => (
              <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: "1px solid #1a1a2a" }}>
                <span style={{ fontSize: 18 }}>{p.rank}</span>
                <span style={{ flex: 1, color: "#fff", fontWeight: 600, fontSize: 14 }}>{p.name}</span>
                <span style={{ color: p.color, fontWeight: 700, fontSize: 14 }}>{p.score} pts</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <SectionTitle>Prochaines étapes</SectionTitle>
      <div style={{ background: "#141420", borderRadius: m ? 12 : 16, padding: m ? 16 : 24, border: "1px solid #2a2a3a" }}>
        <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr 1fr", gap: 20 }}>
          {[{ step: "1", title: "Valider la direction", desc: "Confirmer les principes du mood board avec l'équipe.", color: "#f0a030" }, { step: "2", title: "Créer le nouveau logo", desc: "Briefer un graphiste ou itérer avec IA sur les 3 pistes.", color: "#c840d8" }, { step: "3", title: "Décliner la charte", desc: "Typographies finales, iconographie, motifs, templates.", color: "#4080ff" }].map((s) => (
            <div key={s.step} style={{ textAlign: "center" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: s.color, color: "#fff", fontWeight: 900, fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>{s.step}</div>
              <h4 style={{ color: "#fff", margin: "0 0 8px", fontSize: 14 }}>{s.title}</h4>
              <p style={{ color: "#888", fontSize: 12, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── COMPONENTS ─── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: "0 0 20px", paddingBottom: 8, borderBottom: "1px solid #2a2a3a" }}>{children}</h2>;
}

function Card({ accent, title, children }: { accent: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#111118", borderRadius: 12, padding: 24, borderLeft: `3px solid ${accent}` }}>
      <h3 style={{ fontSize: 16, color: "#fff", margin: "0 0 12px" }}>{title}</h3>
      {children}
    </div>
  );
}

function TagList({ tags }: { tags: { label: string; color: string }[] }) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {tags.map((t) => (<span key={t.label} style={{ background: `${t.color}20`, color: t.color, padding: "4px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600 }}>{t.label}</span>))}
    </div>
  );
}

function Pill({ color, size, children }: { color: string; size?: string; children: React.ReactNode }) {
  const isLarge = size === "large";
  const isSmall = size === "small";
  return <span style={{ background: `${color}20`, color, padding: isLarge ? "10px 20px" : isSmall ? "6px 12px" : "6px 14px", borderRadius: 30, fontSize: isLarge ? 16 : isSmall ? 12 : 13, fontWeight: 700, border: `1px solid ${color}40` }}>{children}</span>;
}

function ColorSwatch({ hex, name }: { hex: string; name: string }) {
  return (
    <div style={{ flex: 1, textAlign: "center", minWidth: 0 }}>
      <div style={{ width: "100%", height: 56, background: hex, borderRadius: 8, border: hex === "#0a0a0a" || hex === "#0c0c14" ? "1px solid #333" : "none" }} />
      <div style={{ fontSize: 10, color: "#888", marginTop: 6, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</div>
      <div style={{ fontSize: 10, color: "#555" }}>{hex}</div>
    </div>
  );
}

function ColorRole({ hex, name, role, usage }: { hex: string; name: string; role: string; usage: string }) {
  return (
    <div style={{ background: "#141420", borderRadius: 12, padding: 16, display: "flex", gap: 12, alignItems: "flex-start" }}>
      <div style={{ width: 36, height: 36, borderRadius: 8, background: hex, flexShrink: 0 }} />
      <div style={{ minWidth: 0 }}>
        <h4 style={{ margin: 0, fontSize: 13, color: "#fff" }}>{name}</h4>
        <p style={{ margin: "4px 0 0", fontSize: 11, color: "#999", lineHeight: 1.5 }}>{role}</p>
        <p style={{ margin: "4px 0 0", fontSize: 11, color: "#666", lineHeight: 1.5 }}>Usage : {usage}</p>
      </div>
    </div>
  );
}

function GradientBox({ gradient, label }: { gradient: string; label: string }) {
  return (
    <div style={{ borderRadius: 12, overflow: "hidden" }}>
      <div style={{ height: 80, background: gradient }} />
      <div style={{ background: "#141420", padding: "8px 12px", fontSize: 12, color: "#888" }}>{label}</div>
    </div>
  );
}

function ConceptCard({ icon, title, description, keywords }: { icon: string; title: string; description: string; keywords: string[] }) {
  return (
    <div style={{ background: "#141420", borderRadius: 12, padding: 24, border: "1px solid #2a2a3a" }}>
      <div style={{ fontSize: 32, marginBottom: 8 }}>{icon}</div>
      <h3 style={{ fontSize: 16, color: "#fff", margin: "0 0 8px" }}>{title}</h3>
      <p style={{ fontSize: 13, color: "#999", lineHeight: 1.7, margin: "0 0 12px" }}>{description}</p>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {keywords.map((k) => (<span key={k} style={{ background: "#1a1a2a", color: "#aaa", padding: "3px 8px", borderRadius: 4, fontSize: 11 }}>{k}</span>))}
      </div>
    </div>
  );
}

function MoodCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ background: "#111118", borderRadius: 12, padding: 24, border: "1px solid #1e1e2e" }}>
      <h3 style={{ fontSize: 16, color: "#fff", margin: "0 0 16px" }}>{title}</h3>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
          <span style={{ color: "#f0a030", fontSize: 12, marginTop: 2 }}>◆</span>
          <span style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

function TabNav({ sections, active, onSelect, isMobile }: { sections: readonly Section[]; active: Section; onSelect: (section: Section) => void; isMobile: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isMobile) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [isMobile, checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -140 : 140, behavior: "smooth" });
  };

  if (!isMobile) {
    return (
      <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
        {sections.map((s) => (<TabButton key={s} section={s} active={active} onSelect={onSelect} isMobile={false} />))}
      </div>
    );
  }

  const arrowBtn = (dir: "left" | "right", visible: boolean): React.CSSProperties => ({
    position: "absolute", top: 0, [dir === "left" ? "left" : "right"]: 0, zIndex: 3, height: "100%", width: 32,
    display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "none",
    cursor: "pointer", color: "#c840d8", fontSize: 18, opacity: visible ? 1 : 0,
    pointerEvents: visible ? "auto" : "none", transition: "opacity 0.2s", padding: 0,
  });

  const fadeMask = (dir: "left" | "right", visible: boolean): React.CSSProperties => ({
    position: "absolute", top: 0, [dir === "left" ? "left" : "right"]: 0, width: 40, height: "100%",
    background: dir === "left" ? "linear-gradient(90deg, #0a0a0a 30%, transparent)" : "linear-gradient(270deg, #0a0a0a 30%, transparent)",
    pointerEvents: "none", zIndex: 2, opacity: visible ? 1 : 0, transition: "opacity 0.25s",
  });

  return (
    <div style={{ position: "relative" }}>
      <div style={fadeMask("left", canScrollLeft)} />
      <button onClick={() => scroll("left")} style={arrowBtn("left", canScrollLeft)} aria-label="Défiler à gauche">‹</button>
      <div ref={scrollRef} style={{ display: "flex", gap: 0, overflowX: "auto", flexWrap: "nowrap", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none", padding: "0 28px" }}>
        {sections.map((s) => (<TabButton key={s} section={s} active={active} onSelect={onSelect} isMobile />))}
      </div>
      <div style={fadeMask("right", canScrollRight)} />
      <button onClick={() => scroll("right")} style={arrowBtn("right", canScrollRight)} aria-label="Défiler à droite">›</button>
    </div>
  );
}

function TabButton({ section, active, onSelect, isMobile }: { section: Section; active: Section; onSelect: (s: Section) => void; isMobile: boolean }) {
  return (
    <button onClick={() => onSelect(section)} style={{
      padding: isMobile ? "8px 12px" : "10px 18px", background: active === section ? "#1e1e2e" : "transparent",
      color: active === section ? "#fff" : "#777", border: "none",
      borderBottom: active === section ? "2px solid #c840d8" : "2px solid transparent",
      cursor: "pointer", fontSize: isMobile ? 11 : 13, fontWeight: active === section ? 700 : 500,
      letterSpacing: 0.5, transition: "all 0.2s", whiteSpace: "nowrap", flexShrink: 0,
    }}>
      {sectionLabels[section]}
    </button>
  );
}
