import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Schulungsunterlagen/',
  title: "SVWS Schulungsunterlagen",
  description: "Schulungen SVWS-Server NRW",
  themeConfig: {

    lastUpdated: {
				text: 'Diese Seite wurde zuletzt bearbeitet am',
				formatOptions: {
					dateStyle: 'full',
					timeStyle: 'medium'
				}
			},
			search: {
				provider: 'local'
			},
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Hilfe & Handbuch', link: 'https://help.svws-nrw.de' },
      { text: 'Dokumentation', link: 'https://doku.svws-nrw.de' }
    ],

    sidebar: [
      {
		  text: 'Installation', link: '/Installation_Fachberatung_Moderation/', collapsed: true, 
        items: [
          { text: 'Installation SVWS-Server', link: '/Installation_Fachberatung_Moderation/Installation_SVWS/' },
          { text: 'Installation Zertifikat', link: '/Installation_Fachberatung_Moderation/Installation_Zertifikat/' },
          { text: 'Installation Schild3', link: '/Installation_Fachberatung_Moderation/Installation_SchILD3/' },
		  { text: 'Sichten der Log-Files', link: '/Installation_Fachberatung_Moderation/Log_Files/' },
          { text: 'Installation Zertifikat', link: '/Installation_Fachberatung_Moderation/DBeaver/' },
          { text: 'Installation Schild3', link: '/Installation_Fachberatung_Moderation/AdminTool/' }
        ]
	  },
	  {
        text: 'Leistungsdaten Sek II', link: '/LeistungsdatenSekII/', collapsed: true, 
        items: [
          { text: 'Allgemeine Vorlagen', link: '/LeistungsdatenSekII/Allgemein_Vorlage/' },
          { text: 'Unterrichtsfächer', link: '/LeistungsdatenSekII/Unterrichtsfaecher/' },
          { text: 'Blockung EF', link: '/LeistungsdatenSekII/BlockungKommendeEF/', collapsed: true, 
          items :[
                { text: 'Laufbahnplanung kommende EF', link: '/LeistungsdatenSekII/BlockungKommendeEF/LaufbahnKursplanungJG10/' },
                { text: 'Klausurplanung EF', link: '/LeistungsdatenSekII/BlockungKommendeEF/KlausurplanungJG10/' }
              ]
            },
          { text: 'Import SchILD2 Laufbahndaten', link: '/LeistungsdatenSekII/ImportSchILD2Laufbahndaten/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SVWS-NRW' }
    ]
  }
})
