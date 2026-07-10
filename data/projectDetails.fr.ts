import type { ProjectDetail } from "./projectDetails.en";

export const projectDetails: ProjectDetail[] = [
  // 0. Intégration LLM et Ingénierie de Prompt
  {
    overview:
      "Développement d'un système avancé d'automatisation de processus métier assisté par IA, s'appuyant sur des Large Language Models (LLM) via des techniques sophistiquées de prompt engineering, centré sur des workflows intelligents capables de traiter des documents métier complexes et de générer des insights actionnables avec un effort manuel réduit.",
    metrics: [
      { value: "40%", label: "Réduction du temps d'analyse manuelle" },
      { value: "94%", label: "Taux de précision du modèle" },
      { value: "500+", label: "Documents traités par heure" },
      { value: "75 K€/an", label: "Économies réalisées" },
    ],
    methodology: [
      "Évaluation de modèles GPT-4, Claude et Llama, et construction d'un cadre de prompt engineering avec gestion du contexte",
      "Développement de templates de prompts avancés utilisant le raisonnement en chaîne (chain-of-thought) et le few-shot learning pour des applications spécifiques au domaine",
      "Mise en place d'une injection de contexte dynamique basée sur la classification des documents, avec un pipeline de test et d'optimisation automatisé",
      "Intégration du workflow avec les systèmes métier existants pour un traitement des documents en temps réel, avec validation humaine (human-in-the-loop) et tableau de bord de suivi",
    ],
    findings: [],
    recommendations: [],
    technologies: ["GPT-4", "Claude", "Llama", "Python", "OpenAI API", "LangChain", "Pandas"],
  },
  // 1. CloudSense : Architecture Cloud de Surveillance Environnementale
  {
    overview:
      "CloudSense répond au besoin de surveillance environnementale abordable en utilisant le cloud computing pour lever les barrières de coût et d'accessibilité des stations de surveillance traditionnelles, qui coûtent généralement entre 15 000 € et 50 000 €.",
    metrics: [
      { value: "95%", label: "Réduction de coût vs. surveillance traditionnelle" },
      { value: "90%", label: "Charge de gestion en moins grâce à l'abstraction cloud" },
      { value: "1000+", label: "Capteurs supportés (mise à l'échelle depuis 1)" },
    ],
    methodology: [
      "Couche de génération de données : des scripts Python simulent des valeurs de capteurs pour la température, l'humidité et la qualité de l'air avec des fluctuations naturelles",
      "Couche de stockage : Google Cloud Storage gère les relevés sous forme de fichiers JSON dans une architecture de data lake légère",
      "Couche de présentation : un tableau de bord Flask sur App Engine fournit une interface claire et réactive pour la visualisation des données",
      "Démonstration de trois modèles de services cloud : IaaS via les VM Compute Engine, PaaS via la migration vers App Engine, et SaaS via les API de Cloud Console",
    ],
    findings: [
      "Preuve de concept fonctionnelle entièrement réalisée dans les limites du niveau gratuit",
      "Scalabilité obtenue de 1 à plus de 1000 capteurs avec une économie à l'usage (pay-as-you-go)",
      "Interface accessible ne nécessitant qu'un navigateur pour fonctionner",
    ],
    recommendations: [
      "S'aligne sur l'ODD 13 de l'ONU (Action climatique) comme modèle reproductible de surveillance environnementale abordable dans des contextes à ressources limitées",
    ],
    technologies: ["Google Cloud Platform", "Python", "Flask", "Cloud Storage", "App Engine", "Compute Engine"],
  },
  // 2. Analytique Cybersécurité avec Splunk
  {
    overview:
      "Supervision de sécurité complète pour détecter et répondre en temps réel aux menaces persistantes avancées, pour une entreprise ayant besoin d'une solution SIEM scalable capable de traiter des millions d'événements de sécurité par jour tout en réduisant les faux positifs.",
    metrics: [
      { value: "60%", label: "Détection et réponse aux menaces plus rapides" },
      { value: "45%", label: "Réduction du risque" },
      { value: "10M+", label: "Événements traités par jour" },
      { value: "99,8%", label: "Disponibilité de la supervision" },
    ],
    methodology: [
      "Phase d'évaluation : audit complet de l'infrastructure de sécurité, identification des actifs critiques, et conception de l'architecture Splunk",
      "Phase de mise en œuvre : déploiement de la plateforme Splunk Enterprise Security, configuration des sources de données depuis plusieurs outils de sécurité, et création de règles de corrélation et d'alertes personnalisées",
    ],
    findings: [
      "Détection de 95 % des menaces persistantes avancées simulées",
      "Réduction de 70 % des alertes faux positifs",
      "Réduction de 35 % des coûts opérationnels de sécurité tout en renforçant la conformité SOX et PCI-DSS",
    ],
    recommendations: [
      "Déployer des capacités avancées de threat hunting",
      "Mettre en œuvre une architecture de sécurité zero-trust",
      "Intégrer l'IA/ML pour l'analyse prédictive des menaces",
      "Mettre en place un centre des opérations de sécurité (SOC) dédié",
    ],
    technologies: ["Splunk Enterprise Security", "SIEM", "Règles de corrélation personnalisées", "Flux de threat intelligence"],
  },
  // 3. Tableau de Bord Power BI de Performance Commerciale
  {
    overview:
      "Conception et développement d'un tableau de bord analytique Power BI complet pour une entreprise de retail multinationale, couvrant l'intégration de données multi-sources, des calculs DAX et des visualisations interactives de la performance commerciale, du comportement client et des tendances de marché par région et catégorie de produit.",
    metrics: [
      { value: "28%", label: "Hausse du chiffre d'affaires en glissement annuel" },
      { value: "80%", label: "Temps de reporting manuel en moins" },
      { value: "95%", label: "Taux d'adoption par les équipes commerciales" },
      { value: "3 mois", label: "Délai de retour sur investissement" },
    ],
    methodology: [
      "Construction d'un modèle de données en étoile connectant cinq sources : SQL Server, fichiers Excel, SharePoint, API web et Azure Data Lake",
      "Mise en place de relations optimisées, de colonnes et mesures calculées, de fonctions time-intelligence, et de sécurité au niveau des lignes (row-level security)",
    ],
    findings: [
      "L'Amérique du Nord est en tête avec 40 % du chiffre d'affaires total",
      "L'Europe a connu une croissance de 22 % sur les catégories premium",
      "L'Asie-Pacifique a le taux d'acquisition client le plus élevé, à 35 % de nouveaux clients",
      "L'Amérique latine montre un potentiel de croissance de 45 % en glissement annuel",
    ],
    recommendations: [],
    technologies: ["Power BI Desktop", "DAX", "SQL", "Power Query", "Langage M", "Power BI Service"],
  },
  // 4. Analyse SQL de Base de Données Clients
  {
    overview:
      "Analyse SQL complète de la base de données clients d'une entreprise de retail, comportant 2,5 millions d'enregistrements sur 3 ans d'historique de transactions, visant à comprendre les comportements, calculer la valeur vie client, identifier les risques de churn et segmenter la clientèle pour les stratégies marketing.",
    metrics: [
      { value: "2,5 M", label: "Enregistrements clients analysés" },
      { value: "45%", label: "Du chiffre d'affaires généré par les 8 % de clients VIP" },
      { value: "23%", label: "De clients à risque de churn élevé" },
      { value: "40%", label: "Hausse de rétention après le 3e achat" },
    ],
    methodology: [
      "Utilisation de fonctions de fenêtrage (ROW_NUMBER, RANK, LAG/LEAD), de CTE et de sous-requêtes complexes",
      "Application d'agrégations avec GROUP BY/HAVING, de fonctions de date, et de jointures multi-tables",
      "Optimisation des performances par l'indexation et le tuning des requêtes",
    ],
    findings: [
      "Les clients VIP (8 %) génèrent 45 % du chiffre d'affaires ; les clients réguliers (35 %) en génèrent 40 %",
      "La durée de vie client moyenne est de 18 mois, avec 23 % des clients à risque de churn élevé",
      "Le segment Champions (12 % des clients) réalise en moyenne 450 € par commande",
      "Le T4 génère 35 % du chiffre d'affaires annuel, avec un pic de 400 % pour l'électronique au Black Friday",
    ],
    recommendations: [
      "Mettre en place des programmes de fidélité à paliers",
      "Développer des campagnes de reconquête ciblant les clients à haut risque",
      "Optimiser les stocks 2 mois en amont des tendances saisonnières",
      "Améliorer les plateformes mobiles et construire des modèles ML prédictifs à partir des constats SQL",
    ],
    technologies: ["PostgreSQL", "Fonctions de fenêtrage SQL", "Analyse de cohortes", "Segmentation RFM"],
  },
  // 5. Analytique de Campagnes Marketing Digital
  {
    overview:
      "Analyse complète d'une campagne marketing digitale multicanal de 6 mois pour un client e-commerce, couvrant Google Ads, Facebook, Instagram et l'email, visant à optimiser l'allocation budgétaire et améliorer les taux de conversion.",
    metrics: [
      { value: "45%", label: "Amélioration du ROI des campagnes" },
      { value: "4,2x", label: "ROI de l'email marketing" },
      { value: "65%", label: "Conversions nécessitant 3 points de contact ou plus" },
      { value: "72%", label: "Sessions issues du mobile" },
    ],
    methodology: [
      "Mise en place d'un suivi unifié avec paramètres UTM et suivi cross-device",
      "Analyse de plus de 500 000 sessions utilisateurs multi-canaux avec analyse de cohortes et des schémas d'attribution",
      "Construction de tableaux de bord Tableau automatisés, de modèles de segmentation et d'un cadre de tests A/B",
    ],
    findings: [
      "Google Ads a converti à 3,2 % ; Facebook a augmenté la portée de 85 % ; Instagram a généré 8,5 % d'engagement chez les jeunes audiences",
      "Le mobile représentait 72 % des sessions mais seulement 45 % des conversions",
      "Le pic d'engagement se situait entre mardi et jeudi, 14h-16h",
      "Les clients récurrents avaient une valeur moyenne de commande 3,5 fois plus élevée",
    ],
    recommendations: [
      "Réallouer le budget Google Ads vers l'email marketing",
      "Mettre en place du retargeting pour les conversions multi-points de contact",
      "Optimiser l'expérience mobile",
      "Utiliser des enchères horaires pendant les pics d'engagement",
      "Développer des programmes de fidélité client",
    ],
    technologies: ["Google Analytics", "SQL", "Tableau"],
  },
  // 6. Optimisation du Module Finance SAP
  {
    overview:
      "Analyse et optimisation complètes des modules SAP Finance (FI) et Contrôle de gestion (CO) pour une entreprise manufacturière multinationale, sur un engagement de 8 semaines, visant à rationaliser les processus financiers, améliorer la fiabilité des données et garantir la conformité aux normes comptables internationales.",
    metrics: [
      { value: "40%", label: "Réduction du temps de clôture mensuelle" },
      { value: "60%", label: "Traitement des factures plus rapide" },
      { value: "2,5 M€", label: "Économies annuelles" },
      { value: "50%", label: "Moins d'erreurs de saisie manuelle" },
    ],
    methodology: [
      "Phase 1 : revue des processus FI/CO existants, identification des points de friction, et entretiens avec les parties prenantes pour établir une base de référence",
      "Phase 2 : refonte des processus, spécification des développements sur mesure, et planification de la conduite du changement",
      "Phase 3 : mise en œuvre de la configuration et des développements sur mesure, tests utilisateurs (UAT), formation des utilisateurs, et accompagnement de la stabilisation post-déploiement",
    ],
    findings: [],
    recommendations: [],
    technologies: ["Configuration SAP FI", "Paramétrage SAP CO", "ABAP", "RFC/IDoc/services web", "SAP Query", "Crystal Reports"],
  },
  // 7. Analyse d'Implémentation CRM
  {
    overview:
      "Implémentation Salesforce CRM sur 12 semaines (T4 2023–T1 2024) pour centraliser la gestion client et améliorer l'efficacité commerciale d'une organisation gérant 45 000 fiches clients avec une équipe commerciale de 125 personnes et un pipeline annuel de 50 M€.",
    metrics: [
      { value: "4,2 M€", label: "ROI en première année" },
      { value: "35%", label: "Amélioration de l'efficacité commerciale" },
      { value: "340%", label: "ROI global" },
      { value: "95%", label: "Fiabilité des données (contre 72 %)" },
    ],
    methodology: [
      "Phase 1 – Fondations (4 sem.) : configuration de l'organisation Salesforce et migration des données depuis les systèmes existants",
      "Phase 2 – Enrichissement (6 sem.) : automatisations avancées, workflows, et tests pilotes",
      "Phase 3 – Déploiement (2 sem.) : formation des utilisateurs à l'échelle de l'entreprise et mise en production complète",
      "La conduite du changement a inclus des ateliers pour les dirigeants, la formation des managers, des sessions utilisateurs finaux, et un programme de super-utilisateurs référents",
    ],
    findings: [
      "Les données clients étaient fragmentées sur 5 systèmes différents",
      "La qualification manuelle des leads prenait 2 à 3 jours, sans visibilité centralisée sur le pipeline",
      "Le reporting manuel mobilisait 8 heures par semaine, avec une fiabilité des données de seulement 72 %",
    ],
    recommendations: [
      "Adopter une méthodologie commerciale standardisée",
      "Automatiser le scoring des leads",
      "Déployer des tableaux de bord en temps réel",
      "Mettre en place des boucles de retour continu pour l'amélioration continue",
    ],
    technologies: ["Salesforce CRM", "Intégration SAP ERP", "HubSpot", "Microsoft Exchange"],
  },
  // 8. Optimisation du Support Informatique
  {
    overview:
      "Engagement de 8 semaines (T3 2024) visant à réduire le temps de résolution et améliorer la satisfaction client sur la gestion des incidents, des problèmes et des changements, en s'appuyant sur les référentiels ITIL.",
    metrics: [
      { value: "30%", label: "Réduction du temps de résolution" },
      { value: "850 K€", label: "Économies réalisées" },
      { value: "78%", label: "Résolution au premier appel (contre 65 %)" },
      { value: "4,6/5", label: "Satisfaction client" },
    ],
    methodology: [
      "Gestion des incidents : correction des points de friction dans l'enregistrement/la catégorisation des tickets, et ajout d'un routage automatisé",
      "Gestion des problèmes : passage d'une approche réactive à proactive, avec une analyse des causes racines renforcée",
      "Gestion des changements : simplification des approbations et introduction de revues post-implémentation",
    ],
    findings: [
      "Le temps de résolution moyen était de 6 heures, avec un backlog de plus de 350 tickets",
      "La résolution au premier appel n'était que de 65 %",
      "Les inefficacités coûtaient environ 1,2 M€ par an",
    ],
    recommendations: ["Construire une base de connaissances complète", "Introduire une gestion proactive des problèmes"],
    technologies: [],
  },
  // 9. Analytique de Performance Commerciale
  {
    overview:
      "Engagement visant à optimiser la performance commerciale et améliorer la précision des prévisions, face à une équipe commerciale ayant des difficultés à prévoir les ventes avec exactitude, ce qui causait des problèmes de gestion des stocks et des objectifs de chiffre d'affaires manqués.",
    metrics: [
      { value: "35%", label: "Amélioration de la précision des prévisions" },
      { value: "2,4 M€", label: "Hausse du chiffre d'affaires" },
      { value: "+24%", label: "Croissance du chiffre d'affaires" },
      { value: "108%", label: "Taux d'atteinte des objectifs" },
    ],
    methodology: [
      "Collecte et nettoyage de 18 mois de données commerciales",
      "Développement de modèles prédictifs avec SQL et Tableau pour identifier les principaux facteurs de performance",
      "Mise en place d'un reporting en temps réel et d'une infrastructure d'optimisation des stocks",
    ],
    findings: [
      "Identification de schémas saisonniers clairs dans les ventes",
      "Mise en évidence des principaux facteurs influençant la performance commerciale",
    ],
    recommendations: [],
    technologies: ["SQL", "Tableau", "Analytique prédictive", "Tableaux de bord KPI"],
  },
  // 10. Analyse d'Études de Marché Tech
  {
    overview:
      "Analyse concurrentielle complète du marché du cloud computing avec identification des tendances, estimation de la taille de marché et recommandations stratégiques, réalisée en 3 semaines (mars-avril 2024) pour une startup planifiant son entrée sur le marché.",
    metrics: [
      { value: "120 Md$", label: "Taille du marché IaaS (croissance de 22 %)" },
      { value: "195 Md$", label: "Taille du marché SaaS (croissance de 15 %)" },
      { value: "35%", label: "TCAC du edge computing" },
      { value: "65%", label: "Part de marché détenue par les 3 principaux acteurs" },
    ],
    methodology: [
      "Recherche primaire via des enquêtes sectorielles et des entretiens d'experts, complétée par des rapports sectoriels secondaires",
      "Application du modèle des 5 forces de Porter, d'une analyse SWOT, du sizing TAM/SAM/SOM, et d'une analyse de régression pour la prévision des tendances",
    ],
    findings: [
      "Le edge computing est le segment à la croissance la plus rapide, à 35 % de TCAC",
      "Les PME affichent un écart d'adoption du cloud de 40 %",
      "Les solutions spécifiques à un secteur génèrent des marges 60 % plus élevées",
    ],
    recommendations: [
      "Se concentrer sur le edge computing et les segments PME pour un ROI optimal",
      "Développer des solutions spécifiques aux secteurs de la santé et de la finance",
    ],
    technologies: ["Tableau", "Python", "Analyse statistique"],
  },
  // 11. Étude d'Amélioration des Processus E-commerce
  {
    overview:
      "Initiative d'optimisation du parcours de paiement pour une plateforme e-commerce confrontée à un taux d'abandon de panier de 68 % et à de nombreuses réclamations clients sur la complexité du checkout.",
    metrics: [
      { value: "68 %→43 %", label: "Taux d'abandon de panier" },
      { value: "7,2→2,5 min", label: "Temps de paiement moyen" },
      { value: "1,8 M€", label: "Chiffre d'affaires additionnel annuel" },
      { value: "4,1/5", label: "Satisfaction client projetée" },
    ],
    methodology: [
      "Cartographie du processus avec BPMN et Visio",
      "Analyse des écarts pour isoler les causes racines : création de compte obligatoire, saisie d'informations en double, et moyens de paiement limités",
      "Proposition d'un déploiement en 3 phases : paiement invité et réduction des champs obligatoires, puis design mono-page optimisé mobile, puis tests A/B avec personnalisation",
    ],
    findings: [
      "Le paiement comptait 7 étapes pour une durée moyenne de 7,2 minutes, dont 45 s pour la revue du panier et 120 s pour la seule création de compte",
      "La conversion mobile n'était que de 1,8 %, pour un taux de réussite global de seulement 32 %",
    ],
    recommendations: [
      "Activer le paiement invité et supprimer les champs obligatoires",
      "Passer à un design mono-page optimisé pour le mobile",
      "Mener des tests A/B avec personnalisation",
      "Réduire le paiement de 7 à 4 étapes",
    ],
    technologies: ["BPMN", "Visio"],
  },
  // 12. Tableau de Bord d'Analyse Budgétaire Personnelle
  {
    overview:
      "Développement d'un système complet d'analyse budgétaire personnelle avec Excel et Power BI pour suivre, analyser et optimiser des données financières personnelles.",
    metrics: [
      { value: "25%", label: "Dépenses de restauration réduites" },
      { value: "45€/mois", label: "Économies sur les abonnements" },
      { value: "15%", label: "Hausse de l'épargne" },
    ],
    methodology: [
      "Collecte de 6 mois de données de transactions",
      "Nettoyage des données avec des formules Excel et Power Query",
      "Création de plus de 15 catégories de dépenses",
    ],
    findings: [
      "Le logement représentait 35 % des dépenses",
      "Les dépenses de restauration dépassaient le budget de 20 %",
      "Les dépenses du week-end étaient 40 % plus élevées qu'en semaine",
      "Les abonnements totalisaient 180 €/mois",
    ],
    recommendations: [
      "Fixer un budget restauration mensuel de 300 € et revoir les abonnements chaque trimestre (court terme)",
      "Automatiser l'épargne et suivre un tableau de bord mensuel (long terme)",
    ],
    technologies: ["Microsoft Excel", "Power BI", "DAX"],
  },
];
