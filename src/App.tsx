import { useState } from "react";

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
          padding: "32px 24px 0",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: "#888", letterSpacing: 4 }}>DIRECTION ARTISTIQUE</span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #444, transparent)" }} />
          </div>
          <h1
            style={{
              fontSize: 42,
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
          <p style={{ fontSize: 16, color: "#999", margin: "0 0 24px", fontStyle: "italic" }}>
            Mood Board — De l'horreur pure au "Dark Carnival Fun"
          </p>
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => setActive(s)}
                style={{
                  padding: "10px 18px",
                  background: active === s ? "#1e1e2e" : "transparent",
                  color: active === s ? "#fff" : "#777",
                  border: "none",
                  borderBottom: active === s ? "2px solid #c840d8" : "2px solid transparent",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: active === s ? 700 : 500,
                  letterSpacing: 0.5,
                  transition: "all 0.2s",
                }}
              >
                {sectionLabels[s]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
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
  return (
    <div>
      <SectionTitle>Le probl\u00e8me de la DA actuelle</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 40 }}>
        <Card accent="#e84040" title="Ce qu'on a aujourd'hui">
          <TagList tags={[ { label: "Gothic m\u00e9di\u00e9val", color: "#e84040" }, { label: "Horror pur", color: "#e84040" }, { label: "S\u00e9rieux / sombre", color: "#e84040" }, { label: "Typographie m\u00e9di\u00e9vale", color: "#e84040" } ]} />
          <p style={{ color: "#aaa", lineHeight: 1.7, marginTop: 12 }}>
            L'univers visuel actuel est ancr\u00e9 dans un registre <strong style={{ color: "#e84040" }}>horreur cin\u00e9matographique</strong> : silhouettes mena\u00e7antes, fum\u00e9es, ambiance Dead by Daylight. C'est beau, c'est angoissant\u2026 mais c'est <em>trop s\u00e9rieux</em>. On a l'impression d'entrer dans un film d'horreur, pas dans un jeu.
          </p>
          <p style={{ color: "#888", lineHeight: 1.7 }}>
            Le logo gothique + diamants \u00e9voque plus un groupe de metal ou un escape game premium qu'un concept ludique et social. Il ne communique ni le fun, ni l'\u00e9nergie, ni le cirque.
          </p>
        </Card>
        <Card accent="#4080ff" title="Ce qu'on veut transmettre">
          <TagList tags={[ { label: "Fun & Frissons", color: "#4080ff" }, { label: "\u00c9nergie sociale", color: "#c840d8" }, { label: "Accessible tout public", color: "#40c8a0" }, { label: "Cirque & Spectacle", color: "#f0a030" } ]} />
          <p style={{ color: "#aaa", lineHeight: 1.7, marginTop: 12 }}>
            CCK est un <strong style={{ color: "#4080ff" }}>jeu social</strong> avant d'\u00eatre une exp\u00e9rience d'horreur. C'est le cache-cache de votre enfance, survitamin\u00e9, dans un cirque qui a mal tourn\u00e9. On crie, on rit, on se cache, on court — c'est <em>excitant</em>, pas traumatisant.
          </p>
          <p style={{ color: "#888", lineHeight: 1.7 }}>
            Le public cible (18-35) veut une sortie m\u00e9morable entre potes, pas une \u00e9preuve psychologique. L'ambiance doit dire : \"viens jouer\" avant \"aie peur\".
          </p>
        </Card>
      </div>
      <SectionTitle>L'\u00e9quation \u00e0 r\u00e9soudre</SectionTitle>
      <div style={{ background: "linear-gradient(135deg, #1a1a2a, #1e1428)", borderRadius: 16, padding: 32, textAlign: "center", border: "1px solid #2a2a3a" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
          <Pill color="#e84040" size="large">\ud83c\udf83 Angoissant</Pill>
          <span style={{ fontSize: 28, color: "#666" }}>+</span>
          <Pill color="#f0a030" size="large">\ud83c\udfaa Cirque</Pill>
          <span style={{ fontSize: 28, color: "#666" }}>+</span>
          <Pill color="#4080ff" size="large">\ud83c\udfae Ludique</Pill>
          <span style={{ fontSize: 28, color: "#666" }}>=</span>
          <Pill color="#c840d8" size="large">\u2728 DARK CARNIVAL FUN</Pill>
        </div>
        <p style={{ color: "#888", marginTop: 20, fontSize: 15 }}>
          Pensez : <strong style={{ color: "#ccc" }}>Beetlejuice</strong> \u00d7{" "}<strong style={{ color: "#ccc" }}>Five Nights at Freddy's</strong> \u00d7{" "}<strong style={{ color: "#ccc" }}>Killer Klowns from Outer Space</strong> \u00d7{" "}<strong style={{ color: "#ccc" }}>The Night Circus</strong>
        </p>
      </div>
    </div>
  );
}

function DirectionSection() {
  return (
    <div>
      <SectionTitle>Le concept : \"Dark Carnival Fun\"</SectionTitle>
      <p style={{ color: "#aaa", lineHeight: 1.8, fontSize: 16, marginBottom: 32, maxWidth: 800 }}>
        On ne cherche pas \u00e0 supprimer l'obscurit\u00e9 — on cherche \u00e0 y injecter de la <strong style={{ color: "#f0a030" }}>lumi\u00e8re foraine</strong>, du <strong style={{ color: "#c840d8" }}>spectacle</strong> et du <strong style={{ color: "#40c8a0" }}>fun chaotique</strong>. L'ambiance id\u00e9ale, c'est un carnaval nocturne o\u00f9 tout va un peu trop vite, les lumi\u00e8res clignotent, les rires se m\u00ealent aux cris — et quelque part dans le noir, quelqu'un vous cherche.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginBottom: 40 }}>
        <ConceptCard icon="\ud83c\udfaa" title="Le Cirque Maudit" description="Un cirque ambulant qui s'est install\u00e9 dans votre ville et ne veut plus partir. Les attractions tournent encore, mais les artistes ont\u2026 chang\u00e9. L'espace physique est un chapiteau permanent, pas un bunker." keywords={["Chapiteau", "Attractions d\u00e9traqu\u00e9es", "Man\u00e8ges", "Guirlandes", "Confettis noirs"]} />
        <ConceptCard icon="\ud83c\udccf" title="Le Ma\u00eetre du Jeu" description="Le Tueur n'est pas un monstre — c'est un showman. Un Ma\u00eetre de C\u00e9r\u00e9monie qui a d\u00e9cid\u00e9 que VOUS \u00eates le spectacle. Il est th\u00e9\u00e2tral, flamboyant, presque charmant. C'est ce qui le rend effrayant." keywords={["Showman", "Th\u00e9\u00e2tral", "Charismatique", "Impr\u00e9visible", "Performer"]} />
        <ConceptCard icon="\u26a1" title="Le Jeu avant la Peur" description="Chaque \u00e9l\u00e9ment visuel doit donner envie de jouer. Les affiches sont des invitations, pas des avertissements. Le logo fait sourire nerveusement, pas fuir. L'\u00e9nergie est celle d'un parc \u00e0 th\u00e8me, pas d'un film d'horreur." keywords={["Excitation", "D\u00e9fi", "\u00c9nergie", "Social", "Rejouabilit\u00e9"]} />
      </div>
      <SectionTitle>Les 5 piliers visuels</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
        {[
          { num: "01", title: "Nuit Foraine", desc: "Ambiance de f\u00eate foraine nocturne — n\u00e9ons, guirlandes, lumi\u00e8res qui percent l'obscurit\u00e9", color: "#f0a030" },
          { num: "02", title: "Dualit\u00e9 Fun/Peur", desc: "Chaque \u00e9l\u00e9ment a deux lectures : amusant au premier regard, inqui\u00e9tant au second", color: "#c840d8" },
          { num: "03", title: "Bleu vs Rouge", desc: "Le duel Survivants/Tueurs reste central mais s'enrichit de dor\u00e9s et de n\u00e9ons", color: "#4080ff" },
          { num: "04", title: "Illustr\u00e9 > Photo", desc: "Un style plus graphique, illustr\u00e9, presque bande dessin\u00e9e — pas du photor\u00e9alisme sombre", color: "#40c8a0" },
          { num: "05", title: "Mouvement & \u00c9nergie", desc: "Tout est dynamique : typos en mouvement, confettis, \u00e9tincelles, fum\u00e9es color\u00e9es", color: "#e84040" },
        ].map((p) => (
          <div key={p.num} style={{ background: "#141420", borderRadius: 12, padding: 20, borderTop: `3px solid ${p.color}` }}>
            <span style={{ fontSize: 28, fontWeight: 900, color: p.color, opacity: 0.4 }}>{p.num}</span>
            <h4 style={{ margin: "8px 0 8px", fontSize: 15, color: "#fff" }}>{p.title}</h4>
            <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PaletteSection() {
  return (
    <div>
      <SectionTitle>Palette de couleurs — \u00c9volution</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 40 }}>
        <div>
          <h3 style={{ color: "#888", fontSize: 13, letterSpacing: 2, marginBottom: 16 }}>AVANT — PALETTE ACTUELLE</h3>
          <div style={{ display: "flex", gap: 8 }}>
            {[{ hex: "#0a0a0a", name: "Noir profond" }, { hex: "#1a3a6a", name: "Bleu sombre" }, { hex: "#8a1a1a", name: "Rouge sang" }, { hex: "#f0e8d8", name: "Cr\u00e8me" }].map((c) => (<ColorSwatch key={c.hex} {...c} />))}
          </div>
          <p style={{ color: "#666", fontSize: 13, marginTop: 12 }}>Froide. S\u00e9rieuse. Cin\u00e9matographique. Pas de chaleur, pas de fun.</p>
        </div>
        <div>
          <h3 style={{ color: "#c840d8", fontSize: 13, letterSpacing: 2, marginBottom: 16 }}>\u2726 APR\u00c8S — DARK CARNIVAL</h3>
          <div style={{ display: "flex", gap: 8 }}>
            {[{ hex: "#0c0c14", name: "Noir nuit" }, { hex: "#e84040", name: "Rouge cirque" }, { hex: "#3070e8", name: "Bleu \u00e9lectrique" }, { hex: "#f0a030", name: "Or forain" }, { hex: "#c840d8", name: "Violet n\u00e9on" }, { hex: "#f0e8d8", name: "Cr\u00e8me chaud" }].map((c) => (<ColorSwatch key={c.hex} {...c} />))}
          </div>
          <p style={{ color: "#999", fontSize: 13, marginTop: 12 }}>Plus riche. L'or et le violet ajoutent le <strong>spectacle</strong>. Le rouge et bleu restent mais sont plus <strong>vifs, \u00e9lectriques</strong>.</p>
        </div>
      </div>
      <SectionTitle>R\u00f4le de chaque couleur</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        <ColorRole hex="#e84040" name="Rouge Cirque" role="Camp Tueurs — Danger, spectacle, rideau de sc\u00e8ne" usage="\u00c9l\u00e9ments tueurs, alertes, accents primaires, tentes" />
        <ColorRole hex="#3070e8" name="Bleu \u00c9lectrique" role="Camp Survivants — Adr\u00e9naline, survie, lumi\u00e8re dans le noir" usage="\u00c9l\u00e9ments survivants, UI interactive, g\u00e9n\u00e9rateurs" />
        <ColorRole hex="#f0a030" name="Or Forain" role="LE CIRQUE — Spectacle, lumi\u00e8re, invitation, fun" usage="Titres, accents d\u00e9coratifs, guirlandes, \u00e9toiles, CTA" />
        <ColorRole hex="#c840d8" name="Violet N\u00e9on" role="LA MAGIE — Myst\u00e8re, le surnaturel derri\u00e8re le cirque" usage="Accents secondaires, effets sp\u00e9ciaux, gamification" />
        <ColorRole hex="#0c0c14" name="Noir Nuit" role="LA SC\u00c8NE — Le vide, le terrain de jeu, l'inconnu" usage="Fonds, espaces n\u00e9gatifs, contraste" />
        <ColorRole hex="#f0e8d8" name="Cr\u00e8me Chaud" role="LE PUBLIC — Lisibilit\u00e9, humanit\u00e9, chaleur" usage="Texte principal, \u00e9l\u00e9ments UI clairs" />
      </div>
      <div style={{ marginTop: 32 }}>
        <h3 style={{ color: "#888", fontSize: 13, letterSpacing: 2, marginBottom: 16 }}>AMBIANCES LUMINEUSES</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          <GradientBox gradient="linear-gradient(135deg, #0c0c14, #2a1030, #e84040)" label="Territoire Tueur" />
          <GradientBox gradient="linear-gradient(135deg, #0c0c14, #0a1a3a, #3070e8)" label="Territoire Survivant" />
          <GradientBox gradient="linear-gradient(135deg, #1a0a20, #c840d8, #f0a030)" label="Le Cirque (ambiance festive)" />
        </div>
      </div>
    </div>
  );
}

function TypoSection() {
  return (
    <div>
      <SectionTitle>Direction Typographique</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 40 }}>
        <Card accent="#e84040" title="\u274c Avant : Gothique M\u00e9di\u00e9val">
          <div style={{ fontSize: 36, fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 700, color: "#f0e8d8", fontStyle: "italic", margin: "16px 0", letterSpacing: 2 }}>Cache Cache Killer</div>
          <p style={{ color: "#888", fontSize: 13, lineHeight: 1.6 }}>La typographie gothique/m\u00e9di\u00e9vale actuelle \u00e9voque le Moyen-\u00c2ge, le dark fantasy, les jeux de r\u00f4le sombres. C'est \u00e9l\u00e9gant mais froid, et \u00e7a ne dit ni \"cirque\" ni \"fun\". Les diamants et le croissant de lune renforcent un univers mystique qui n'est pas le v\u00f4tre.</p>
        </Card>
        <Card accent="#f0a030" title="\u2726 Apr\u00e8s : Carnival Display Bold">
          <div style={{ fontSize: 38, fontFamily: "'Impact', 'Arial Black', sans-serif", fontWeight: 900, color: "#f0e8d8", margin: "16px 0", letterSpacing: 3, textTransform: "uppercase", textShadow: "0 0 20px rgba(240,160,48,0.3), 2px 2px 0 #e84040" }}>CACHE CACHE KILLER</div>
          <p style={{ color: "#999", fontSize: 13, lineHeight: 1.6 }}>Direction : typographie <strong>bold, large, spectaculaire</strong> inspir\u00e9e des affiches de cirque et de f\u00eate foraine. Des lettres qui ont de la personnalit\u00e9, du volume, de l'impact — comme peintes sur un chapiteau. Fun au premier regard, inqui\u00e9tant au second.</p>
        </Card>
      </div>
      <SectionTitle>Hi\u00e9rarchie Typographique Propos\u00e9e</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
        <div style={{ background: "#141420", borderRadius: 12, padding: 24 }}>
          <span style={{ fontSize: 11, color: "#f0a030", letterSpacing: 2 }}>TITRES / LOGO</span>
          <div style={{ fontSize: 28, fontWeight: 900, fontFamily: "'Impact', sans-serif", textTransform: "uppercase", letterSpacing: 2, marginTop: 12, color: "#fff" }}>CIRCUS SLAB / DISPLAY</div>
          <p style={{ color: "#777", fontSize: 12, marginTop: 12, lineHeight: 1.6 }}>R\u00e9f\u00e9rences : Barnum, Showtime, Circus Didot, Playfair Display Black. Lettres larges, empattements prononc\u00e9s ou display bold.</p>
        </div>
        <div style={{ background: "#141420", borderRadius: 12, padding: 24 }}>
          <span style={{ fontSize: 11, color: "#c840d8", letterSpacing: 2 }}>SOUS-TITRES / ACCROCHES</span>
          <div style={{ fontSize: 22, fontWeight: 600, fontFamily: "sans-serif", marginTop: 12, color: "#fff", fontStyle: "italic" }}>Condensed Sans Bold Italic</div>
          <p style={{ color: "#777", fontSize: 12, marginTop: 12, lineHeight: 1.6 }}>R\u00e9f\u00e9rences : Oswald Bold, Bebas Neue, Barlow Condensed Bold. Nerveuse, dynamique, lisible.</p>
        </div>
        <div style={{ background: "#141420", borderRadius: 12, padding: 24 }}>
          <span style={{ fontSize: 11, color: "#4080ff", letterSpacing: 2 }}>CORPS / UI</span>
          <div style={{ fontSize: 16, fontWeight: 400, fontFamily: "sans-serif", marginTop: 12, color: "#fff" }}>Clean sans-serif lisible</div>
          <p style={{ color: "#777", fontSize: 12, marginTop: 12, lineHeight: 1.6 }}>R\u00e9f\u00e9rences : Inter, DM Sans, Plus Jakarta Sans. Propre, moderne, haute lisibilit\u00e9 sur fond sombre.</p>
        </div>
      </div>
      <div style={{ marginTop: 32, background: "linear-gradient(135deg, #0c0c14, #1a0a20)", borderRadius: 16, padding: 32, textAlign: "center", border: "1px solid #2a2a3a" }}>
        <span style={{ fontSize: 11, color: "#f0a030", letterSpacing: 3 }}>\u2726 BIENVENUE AU \u2726</span>
        <div style={{ fontSize: 52, fontWeight: 900, fontFamily: "'Impact', 'Arial Black', sans-serif", textTransform: "uppercase", letterSpacing: 4, margin: "8px 0", color: "#f0e8d8", textShadow: "0 0 40px rgba(200,64,216,0.3)" }}>CACHE CACHE KILLER</div>
        <div style={{ fontSize: 18, fontWeight: 600, fontFamily: "sans-serif", color: "#c840d8", fontStyle: "italic", letterSpacing: 2 }}>LE CIRQUE NE FERME JAMAIS.</div>
        <div style={{ fontSize: 14, fontFamily: "sans-serif", color: "#888", marginTop: 16 }}>R\u00e9servez votre session \u00b7 Survivants vs Tueurs \u00b7 De 3 \u00e0 10 joueurs</div>
      </div>
    </div>
  );
}

function UniversSection() {
  return (
    <div>
      <SectionTitle>Univers Visuel — \u00c9l\u00e9ments Cl\u00e9s</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 40 }}>
        <MoodCard title="\ud83c\udfaa D\u00e9cor : Le Cirque de Minuit" items={["Chapiteaux ray\u00e9s rouge & noir", "Guirlandes lumineuses, ampoules nues, n\u00e9ons", "Affiches vintage de freakshow", "Confettis, serpentins, ballons d\u00e9gonfl\u00e9s", "Man\u00e8ges fig\u00e9s, attractions d\u00e9traqu\u00e9es", "Rayures de cirque comme motif r\u00e9current"]} />
        <MoodCard title="\ud83c\udfad Personnages : Performers, pas Monstres" items={["Les Tueurs sont des artistes de cirque corrompus", "Ils ont du charisme et une signature visuelle forte", "Les Survivants portent des tenues de spectateurs", "Chaque classe a un costume iconique", "Masques expressifs : sourires fig\u00e9s, maquillages", "Style plus cartoon/stylis\u00e9 que r\u00e9aliste"]} />
        <MoodCard title="\u2728 Effets Visuels & Textures" items={["Fum\u00e9es color\u00e9es : bleu survivants, rouge tueurs", "Confettis et paillettes dans les visuels", "Effets n\u00e9on, lueurs chaudes, halos lumineux", "Textures : vieux bois peint, toile de chapiteau", "\u00c9toiles, losanges, motifs de cartes \u00e0 jouer", "Grain vintage / affiche us\u00e9e"]} />
        <MoodCard title="\ud83c\udfac Ton & Atmosph\u00e8re" items={["Bienvenue au plus grand spectacle de votre vie\u2026", "Le Ma\u00eetre de C\u00e9r\u00e9monie avec ironie et panache", "Annonces fa\u00e7on f\u00eate foraine", "Musique : orgue de Barbarie + synthwave", "Le ton est JOUEUR : on taquine, on d\u00e9fie", "Jamais gore, jamais trash — toujours du spectacle"]} />
      </div>
      <SectionTitle>R\u00e9f\u00e9rences & Inspirations</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {[
          { title: "Killer Klowns from Outer Space", desc: "L'horreur fun par excellence. Couleurs satur\u00e9es, ambiance foraine.", what: "Le ton, la dualit\u00e9 fun/peur, les couleurs" },
          { title: "Five Nights at Freddy's", desc: "Horror accessible, mascots corrompues, esth\u00e9tique enfantine d\u00e9tourn\u00e9e.", what: "L'accessibilit\u00e9, le c\u00f4t\u00e9 mascotte, le merch" },
          { title: "Beetlejuice", desc: "Rayures, n\u00e9on, chaos visuel ma\u00eetris\u00e9. Terrifiant ET hilarant.", what: "Les rayures, le chaos contr\u00f4l\u00e9, le fun" },
          { title: "The Night Circus", desc: "Cirque myst\u00e9rieux, \u00e9l\u00e9gant, magn\u00e9tique. Magie et \u00e9merveillement.", what: "L'\u00e9l\u00e9gance, le myst\u00e8re, l'envie d'entrer" },
        ].map((ref) => (
          <div key={ref.title} style={{ background: "#141420", borderRadius: 12, padding: 20, border: "1px solid #2a2a3a" }}>
            <h4 style={{ fontSize: 14, color: "#f0a030", margin: "0 0 8px" }}>{ref.title}</h4>
            <p style={{ fontSize: 12, color: "#999", lineHeight: 1.6, margin: "0 0 12px" }}>{ref.desc}</p>
            <span style={{ fontSize: 11, color: "#c840d8" }}>\u2192 On prend : {ref.what}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoSection() {
  return (
    <div>
      <SectionTitle>Direction Logo — Principes</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginBottom: 40 }}>
        <Card accent="#e84040" title="Piste 1 : Le Chapiteau">
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <div style={{ fontSize: 14, color: "#f0a030", letterSpacing: 3 }}>\u2726 \u2726 \u2726</div>
            <div style={{ fontSize: 32, fontWeight: 900, fontFamily: "'Impact', sans-serif", textTransform: "uppercase", letterSpacing: 2, color: "#fff", textShadow: "2px 2px 0 #e84040" }}>CCK</div>
            <div style={{ width: 80, height: 3, background: "#e84040", margin: "8px auto", borderRadius: 2 }} />
            <div style={{ fontSize: 10, letterSpacing: 4, color: "#f0a030" }}>CACHE CACHE KILLER</div>
          </div>
          <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>Le monogramme CCK dans un cadre inspir\u00e9 d'un fronton de chapiteau. \u00c9toiles d\u00e9coratives, rayures en fond.</p>
        </Card>
        <Card accent="#c840d8" title="Piste 2 : Le Ticket d'Entr\u00e9e">
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <div style={{ display: "inline-block", border: "2px dashed #c840d8", borderRadius: 8, padding: "12px 24px", background: "rgba(200,64,216,0.05)" }}>
              <div style={{ fontSize: 9, letterSpacing: 3, color: "#c840d8" }}>ADMIT ONE</div>
              <div style={{ fontSize: 26, fontWeight: 900, fontFamily: "'Impact', sans-serif", textTransform: "uppercase", color: "#fff" }}>CACHE CACHE</div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#e84040", fontFamily: "'Impact', sans-serif" }}>KILLER</div>
            </div>
          </div>
          <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>Le logo comme un ticket de spectacle / billet d'entr\u00e9e. Renforce l'id\u00e9e d'\u00e9v\u00e9nement.</p>
        </Card>
        <Card accent="#f0a030" title="Piste 3 : La Mascotte">
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 4 }}>\ud83c\udccf</div>
            <div style={{ fontSize: 22, fontWeight: 900, fontFamily: "'Impact', sans-serif", textTransform: "uppercase", letterSpacing: 1, color: "#fff" }}>CACHE CACHE</div>
            <div style={{ fontSize: 16, fontWeight: 900, color: "#e84040", letterSpacing: 3, fontFamily: "'Impact', sans-serif" }}>K I L L E R</div>
          </div>
          <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>Un personnage iconique int\u00e9gr\u00e9 au logo. Cr\u00e9e de l'attachement, du merch, une mascotte reconnaissable.</p>
        </Card>
      </div>
      <SectionTitle>\u00c9l\u00e9ments graphiques r\u00e9currents</SectionTitle>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {["\u2605 \u00c9toiles (motif cirque)", "\u25c6 Losanges (motif arlequin)", "\u26a1 \u00c9clairs (action, \u00e9nergie)", "\ud83c\udfaa Chapiteau (cadre, ic\u00f4ne)", "\ud83c\udf9f\ufe0f Ticket (CTA, r\u00e9servation)", "\ud83c\udccf Cartes \u00e0 jouer (personnages)", "\u21ba Spirales (hypnose, myst\u00e8re)", "\u2702 Rayures (tentes, costumes)"].map((e) => (
          <span key={e} style={{ background: "#1a1a2a", border: "1px solid #2a2a3a", borderRadius: 8, padding: "8px 16px", fontSize: 13, color: "#ccc" }}>{e}</span>
        ))}
      </div>
    </div>
  );
}

function ApplicationsSection() {
  return (
    <div>
      <SectionTitle>Applications — Avant / Apr\u00e8s</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 40 }}>
        <Card accent="#4080ff" title="Site Web — Hero Section">
          <div style={{ background: "linear-gradient(180deg, #0c0c14, #1a0a20)", borderRadius: 8, padding: 24, textAlign: "center", border: "1px solid #2a2a3a", marginTop: 12 }}>
            <div style={{ fontSize: 10, letterSpacing: 4, color: "#f0a030" }}>\u2726 BIENVENUE AU \u2726</div>
            <div style={{ fontSize: 28, fontWeight: 900, fontFamily: "'Impact', sans-serif", textTransform: "uppercase", letterSpacing: 2, color: "#f0e8d8", margin: "4px 0" }}>CACHE CACHE KILLER</div>
            <div style={{ fontSize: 12, color: "#c840d8", fontStyle: "italic", marginBottom: 16 }}>Le cirque ne ferme jamais.</div>
            <div style={{ display: "inline-block", background: "linear-gradient(90deg, #e84040, #c840d8)", color: "#fff", fontWeight: 700, padding: "10px 24px", borderRadius: 8, fontSize: 13, letterSpacing: 1 }}>\ud83c\udf9f\ufe0f R\u00c9SERVER MA SESSION</div>
            <div style={{ fontSize: 11, color: "#666", marginTop: 12 }}>3 \u00e0 10 joueurs \u00b7 Survivants vs Tueurs \u00b7 20 min / partie</div>
          </div>
        </Card>
        <Card accent="#c840d8" title="Post Instagram / TikTok">
          <div style={{ background: "linear-gradient(135deg, #1a0a20, #0c0c14, #1a1030)", borderRadius: 8, padding: 24, textAlign: "center", border: "1px solid #2a2a3a", marginTop: 12 }}>
            <div style={{ fontSize: 10, letterSpacing: 3, color: "#e84040" }}>\ud83d\udd34 LIVE</div>
            <div style={{ fontSize: 22, fontWeight: 900, fontFamily: "'Impact', sans-serif", textTransform: "uppercase", color: "#fff", margin: "8px 0" }}>LA SAISON 2 EST L\u00c0.</div>
            <div style={{ fontSize: 36, margin: "8px 0" }}>\ud83c\udfaa</div>
            <div style={{ fontSize: 13, color: "#f0a030", fontWeight: 600 }}>Nouveau tueur. Nouvelles r\u00e8gles.</div>
            <div style={{ fontSize: 11, color: "#888", marginTop: 8 }}>Qui survivra au Magicien ? \ud83c\udccf</div>
            <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 8 }}>
              <span style={{ background: "#e84040", color: "#fff", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 600 }}>#CacheKiller</span>
              <span style={{ background: "#3070e8", color: "#fff", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 600 }}>#DarkCarnival</span>
            </div>
          </div>
        </Card>
        <Card accent="#f0a030" title="Billet / Confirmation R\u00e9servation">
          <div style={{ background: "#141420", borderRadius: 8, padding: 20, border: "2px dashed #f0a030", marginTop: 12, display: "grid", gridTemplateColumns: "1fr auto", gap: 16 }}>
            <div>
              <div style={{ fontSize: 9, letterSpacing: 3, color: "#f0a030" }}>CACHE CACHE KILLER</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: "4px 0" }}>Session du 15/03/2026</div>
              <div style={{ fontSize: 12, color: "#888" }}>19h30 \u00b7 6 joueurs \u00b7 Format DUO</div>
              <div style={{ fontSize: 12, color: "#c840d8", marginTop: 4 }}>Camp : Survivants \ud83d\udc99</div>
            </div>
            <div style={{ textAlign: "center", borderLeft: "1px dashed #333", paddingLeft: 16 }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#f0a030" }}>N\u00b0</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#fff" }}>247</div>
            </div>
          </div>
        </Card>
        <Card accent="#40c8a0" title="\u00c9cran Classement (in-situ)">
          <div style={{ background: "#0c0c14", borderRadius: 8, padding: 20, border: "1px solid #2a2a3a", marginTop: 12 }}>
            <div style={{ textAlign: "center", marginBottom: 12 }}><span style={{ fontSize: 10, letterSpacing: 3, color: "#f0a030" }}>\ud83c\udfc6 CLASSEMENT DU MOIS \ud83c\udfc6</span></div>
            {[{ rank: "\ud83e\udd47", name: "DarkJ0ker", score: 2840, color: "#f0a030" }, { rank: "\ud83e\udd48", name: "SurvivorQueen", score: 2650, color: "#ccc" }, { rank: "\ud83e\udd49", name: "NightRunner", score: 2410, color: "#c87830" }].map((p) => (
              <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: "1px solid #1a1a2a" }}>
                <span style={{ fontSize: 18 }}>{p.rank}</span>
                <span style={{ flex: 1, color: "#fff", fontWeight: 600, fontSize: 14 }}>{p.name}</span>
                <span style={{ color: p.color, fontWeight: 700, fontSize: 14 }}>{p.score} pts</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <SectionTitle>Prochaines \u00e9tapes</SectionTitle>
      <div style={{ background: "#141420", borderRadius: 16, padding: 24, border: "1px solid #2a2a3a" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {[{ step: "1", title: "Valider la direction", desc: "Confirmer les principes du mood board avec l'\u00e9quipe.", color: "#f0a030" }, { step: "2", title: "Cr\u00e9er le nouveau logo", desc: "Briefer un graphiste ou it\u00e9rer avec IA sur les 3 pistes.", color: "#c840d8" }, { step: "3", title: "D\u00e9cliner la charte", desc: "Typographies finales, iconographie, motifs, templates.", color: "#4080ff" }].map((s) => (
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

/* \u2500\u2500\u2500 COMPONENTS \u2500\u2500\u2500 */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: "0 0 20px", paddingBottom: 8, borderBottom: "1px solid #2a2a3a" }}>{children}</h2>
  );
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
      {tags.map((t) => (
        <span key={t.label} style={{ background: `${t.color}20`, color: t.color, padding: "4px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600 }}>{t.label}</span>
      ))}
    </div>
  );
}

function Pill({ color, size, children }: { color: string; size?: string; children: React.ReactNode }) {
  const isLarge = size === "large";
  return (
    <span style={{ background: `${color}20`, color, padding: isLarge ? "10px 20px" : "6px 14px", borderRadius: 30, fontSize: isLarge ? 16 : 13, fontWeight: 700, border: `1px solid ${color}40` }}>{children}</span>
  );
}

function ColorSwatch({ hex, name }: { hex: string; name: string }) {
  return (
    <div style={{ flex: 1, textAlign: "center" }}>
      <div style={{ width: "100%", height: 56, background: hex, borderRadius: 8, border: hex === "#0a0a0a" || hex === "#0c0c14" ? "1px solid #333" : "none" }} />
      <div style={{ fontSize: 10, color: "#888", marginTop: 6 }}>{name}</div>
      <div style={{ fontSize: 10, color: "#555" }}>{hex}</div>
    </div>
  );
}

function ColorRole({ hex, name, role, usage }: { hex: string; name: string; role: string; usage: string }) {
  return (
    <div style={{ background: "#141420", borderRadius: 12, padding: 16, display: "flex", gap: 12, alignItems: "flex-start" }}>
      <div style={{ width: 36, height: 36, borderRadius: 8, background: hex, flexShrink: 0 }} />
      <div>
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
        {keywords.map((k) => (
          <span key={k} style={{ background: "#1a1a2a", color: "#aaa", padding: "3px 8px", borderRadius: 4, fontSize: 11 }}>{k}</span>
        ))}
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
          <span style={{ color: "#f0a030", fontSize: 12, marginTop: 2 }}>\u25c6</span>
          <span style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}
