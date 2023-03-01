import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  CompetenceItem,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Hippolyte de Guigné',
  description: 'Curriculum Vitae',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'À propos',
  Contact: 'contact',
  Portfolio: 'Mes projets',
  Resume: 'Mon parcours',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hippolyte de Guigné`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Bienvenue sur mon CV ! Vous pouvez retrouver son template sur mon GitHub, lien au dessous !
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Je suis actuellement un élève-ingénieur de l'école ENSEIRB-MATMECA de Bordeaux en apprentissage chez Atos en
        tant que développeur.
      </p>
    </>
  ),
  actions: [
    {
      href: `https://drive.proton.me/urls/44NDZMCC8R#rwcahwsebKgh`,
      text: 'Télécharger le CV en pdf',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Vieux étudiant, jeune professionnel, j'ai principalement de l'expérience dans le 
  développement web et d'application Java. Au cours de mes études, j'ai eu l'occasion d'utiliser de nombreux
  outils et de logiciels. J'apprécie me lancer à fond dans mes projets et me donner les moyens d'atteindre 
  mes objectifs.`,
  aboutItems: [
    {label: 'Location', text: 'Bordeaux, France', Icon: MapIcon},
    {label: 'Âge', text: '22', Icon: CalendarIcon},
    {label: 'Nationalité', text: 'Française', Icon: FlagIcon},
    {label: 'Intérêts', text: 'Cinéma, vie privée, moto, boxe', Icon: SparklesIcon},
    {label: 'École', text: 'ENSEIRB-MATMECA', Icon: AcademicCapIcon},
    {label: 'Entreprise', text: 'Atos', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: '',
    skills: [
      {
        name: 'Français',
        level: 10,
      },
      {
        name: 'Anglais',
        level: 7,
      },
      {
        name: 'Spanish',
        level: 2,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2020-2023',
    location: 'Bordeaux',
    title: 'ENSEIRB-MATMECA - Bordeaux INP',
    content: (
      <div>
        <p>
          Étudiant dans la filière Réseaux et Systèmes d'Informations de l'école d'ingénieur, formé en alternance sur
          une durée de trois ans. Diplôme prévu en juillet 2023.
        </p>
      </div>
    ),
  },
  {
    date: '2018-2020',
    location: 'Bordeaux',
    title: 'IUT Informatique - Université de Bordeaux',
    content: (
      <div>
        <p>
          Étudiant en informatique, j'ai pu acquérir une formation professionnalisante au cours de nombreux cours
          techniques. Diplômé en juillet 2020.
        </p>
      </div>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Octobre 2020 - présent',
    location: 'Atos, Pessac, Gironde',
    title: 'Apprenti ingénieur développeur',
    content: (
      <ul>
        <li>Migration d’applications COBOL du SI de Pôle Emploi.</li>
        <li>Enrichissement du système des réservations de la société hôtelière Accor.</li>
        <li>Développement d’application de gestion de contrat de l’OPT (Nouvelle-Calédonie).</li>
      </ul>
    ),
  },
  {
    date: 'Mai 2022 - Juillet 2022',
    location: "École française d'Athènes, Athènes, Grèce",
    title: 'Stagiaire développeur web',
    content: (
      <ul>
        <li>
          Mise en place d’un contrôle d’accès à plusieurs niveaux sur la plateforme d’archives archéologiques
          (Archimage).
        </li>
        <li>Refonte des outils de recherche et implémentation de nouvelles fonctionnalités sur la même plateforme.</li>
      </ul>
    ),
  },
  {
    date: 'Avril 2020 - Août 2020',
    location: 'Vinci Construction, Bordeaux, Gironde',
    title: 'Stagiaire développeur web - Intérimaire',
    content: (
      <p>
        Conception et développement d’outils métier s’intégrant dans la suite Office 365 dans le but d’accompagner les
        ingénieurs Vinci dans leur suivi de commandes
      </p>
    ),
  },
];

export const competences: CompetenceItem[] = [
  {
    title: 'Langages de programmation',
    content: <p>Java, C, Javascript, PHP, Bash</p>
  },
  {
    title: 'Web',
    content: <p>Spring boot, Maven, AngularJS, NodeJs, Vue.js, HTML/CSS</p>
  },
  {
    title: 'Base de données',
    content: <p>SQL, Elasticsearch</p>
  },
  {
    title: 'Outils et environnements de travail',
    content: <p>Git, Jira, Suite Office, VS Code, IntelliJ, Windows, Linux, LaTeX, Docker</p>
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Me contacter.',
  description: "N'hésitez pas à me contacter pour quelconque raison !",
  items: [
    {
      type: ContactType.Email,
      text: 'hippolyte@deguigne.fr',
      href: 'mailto:hippolyte@deguigne.fr',
    },
    {
      type: ContactType.Location,
      text: 'Bordeaux, Gironde, France',
      href: 'https://www.google.com/maps/place/Bordeaux',
    },
    {
      type: ContactType.Github,
      text: 'HdG-0',
      href: 'https://github.com/HdG-0/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/HdG-0/'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hippolyte-de-guign%C3%A9/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/'},
];
