import Image from "next/image";

// Public projects credited to Nico Alumbro on behance.net/nicoalumbro.
const multimediaProjects = [
  {
    title: "DevCon Summit: CDO Edition Teaser",
    category: "Motion graphics / Event teaser",
    description: "A teaser for the Cagayan de Oro edition of DevCon Summit.",
    image: "devcon-teaser.png",
    alt: "DevCon Summit 2017 Cagayan de Oro identity on a green background",
    href: "https://www.behance.net/gallery/53974727/DevCon-Summit-CDO-Edition-Teaser",
  },
  {
    title: "Cagayan de Oro - Divisoria",
    category: "3D / City study",
    description: "A sculptural city scene with landmark typography and architectural details.",
    image: "divisoria.jpg",
    alt: "White 3D Divisoria scene with trees, buildings, and landmark lettering",
    href: "https://www.behance.net/gallery/54063775/Cagayan-de-Oro-Divisoria",
  },
  {
    title: "Isometric - Snacks Store",
    category: "3D / Isometric illustration",
    description: "A small storefront study in form, light, and isometric perspective.",
    image: "snacks-store.jpg",
    alt: "Minimal isometric snack shop with a flat roof and covered walkway",
    href: "https://www.behance.net/gallery/54026283/Isometric-Snacks-Store",
  },
  {
    title: "TechSpark Building",
    category: "3D / Architectural study",
    description: "A stylized building visualization with a clean, monochrome treatment.",
    image: "techspark-building.png",
    alt: "White isometric TechSpark building model with signage and streetlights",
    href: "https://www.behance.net/gallery/53853299/TechSpark-Building",
  },
  {
    title: "DevCon CDO React JS Code Camp Poster",
    category: "Graphic design / Event poster",
    description: "Event graphics combining bold typography with geometric cloud illustrations.",
    image: "devcon-react-poster.jpg",
    alt: "Turquoise DevCon React JS Code Camp event poster with white geometric clouds",
    href: "https://www.behance.net/gallery/49271771/DevCon-CDO-React-JS-Code-Camp-Poster",
  },
  {
    title: "T'Nalak Festival Shirt Design",
    category: "Graphic design / Apparel",
    description: "A festival shirt graphic built around textured lettering and ornamental detail.",
    image: "tnalak-shirt.jpg",
    alt: "Gold and white T'Nalak festival lettering and ornament on black",
    href: "https://www.behance.net/gallery/38767907/TNalak-Festival-Shirt-Design",
  },
];

export function MultimediaGallery() {
  return (
    <section
      className="multimedia section-shell"
      id="multimedia"
      aria-labelledby="multimedia-title"
    >
      <div className="multimedia-heading" data-reveal>
        <div>
          <p className="eyebrow">Motion, form &amp; visual identity</p>
          <h2 id="multimedia-title">A different kind of build.</h2>
        </div>
        <p>
          Selected multimedia work, from event teasers and 3D studies to posters
          and apparel graphics. Explore each project on Behance.
        </p>
      </div>

      <div className="multimedia-grid">
        {multimediaProjects.map((project) => (
          <article className="multimedia-card" key={project.href} data-reveal>
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <div className="multimedia-preview">
                <Image
                  src={`/multimedia/${project.image}`}
                  alt={project.alt}
                  width={404}
                  height={316}
                  sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1100px) 45vw, 30vw"
                />
                <span className="multimedia-open" aria-hidden="true">↗</span>
              </div>
              <div className="multimedia-copy">
                <p className="multimedia-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="multimedia-description">{project.description}</p>
                <span className="multimedia-source">
                  View on Behance <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>

      <div className="multimedia-profiles" data-reveal>
        <p>More from my creative practice</p>
        <div>
          <a href="https://www.behance.net/nicoalumbro" target="_blank" rel="noopener noreferrer">
            Behance <span aria-hidden="true">↗</span>
          </a>
          <a href="https://dribbble.com/nikulasito" target="_blank" rel="noopener noreferrer">
            Dribbble <span aria-hidden="true">↗</span>
          </a>
          <a href="https://vimeo.com/voxelworksdigital" target="_blank" rel="noopener noreferrer">
            Vimeo <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
