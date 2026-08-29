
const CONFIG = {

    couple: {
        bride: "MO",
        groom: "CED",
        display: "CED & MO"
    },

    wedding: {
                date: "2026-11-22T16:00:00+08:00",
                location: "Pampanga, Philippines"
            },

            venue: {
                name: "RL Resort & Leisure Park - White Lotus",
    address: "3GMX+4JP, Porac, Pampanga",
    latitude: 15.0828281,
    longitude: 120.5490793
            },

            map: {
                zoom: 15
            },

            qrUrl: window.location.href,

            // Google Apps Script RSVP API
            rsvpApiUrl:
                "https://script.google.com/macros/s/AKfycbwBNUcvZISLlmbGdP6HDDXSb2kdKkYmSkjmvfQOkHYh0tdIwFuonAMbAGSHIRkgIRsd0w/exec"

};
const RSVP_API_URL =
    "https://script.google.com/macros/s/AKfycbwBNUcvZISLlmbGdP6HDDXSb2kdKkYmSkjmvfQOkHYh0tdIwFuonAMbAGSHIRkgIRsd0w/exec";

// =====================================================
// MASTER GUEST LIST
// =====================================================

const GUEST_LIST = [

    

    // =====================================================
    // PRINCIPAL SPONSORS — NINANGS
    // =====================================================

    {
        id: "SP-NINANG-001",
        name: "Adelina Torres",
        category: "Principal Sponsor",
        role: "Ninang",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "SP-NINANG-002",
        name: "Mariza Guevarra",
        category: "Principal Sponsor",
        role: "Ninang",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "SP-NINANG-003",
        name: "Linda Torres",
        category: "Principal Sponsor",
        role: "Ninang",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "SP-NINANG-004",
        name: "Catherine Dizon",
        category: "Principal Sponsor",
        role: "Ninang",
        family: "Dizon Family",
        plusOne: false
    },
    {
        id: "SP-NINANG-005",
        name: "Clare Dizon",
        category: "Principal Sponsor",
        role: "Ninang",
        family: "Dizon Family",
        plusOne: false
    },
    {
        id: "SP-NINANG-006",
        name: "Joy Guinto",
        category: "Principal Sponsor",
        role: "Ninang",
        family: "Guinto Family",
        plusOne: false
    },
    {
        id: "SP-NINANG-007",
        name: "Angelita So Dizon",
        category: "Principal Sponsor",
        role: "Ninang",
        family: "Dizon Family",
        plusOne: false
    },
    {
        id: "SP-NINANG-008",
        name: "Tita Yeng",
        category: "Principal Sponsor",
        role: "Ninang",
        family: null,
        plusOne: false
    },
    {
        id: "SP-NINANG-009",
        name: "Remy Santos",
        category: "Principal Sponsor",
        role: "Ninang",
        family: "Santos Family",
        plusOne: false
    },
    {
        id: "SP-NINANG-010",
        name: "Aleth Sese",
        category: "Principal Sponsor",
        role: "Ninang",
        family: "Sese Family",
        plusOne: false
    },
    {
        id: "SP-NINANG-011",
        name: "Ruth David",
        category: "Principal Sponsor",
        role: "Ninang",
        family: "David Family",
        plusOne: false
    },
    {
        id: "SP-NINANG-012",
        name: "Carmelita Elmido",
        category: "Principal Sponsor",
        role: "Ninang",
        family: "Elmido Family",
        plusOne: false
    },
    {
        id: "SP-NINANG-013",
        name: "Joy Nepomuceno",
        category: "Principal Sponsor",
        role: "Ninang",
        family: "Nepomuceno Family",
        plusOne: false
    },


    // =====================================================
    // PRINCIPAL SPONSORS — NINONGS
    // =====================================================

    {
        id: "SP-NINONG-001",
        name: "Melchor Dychioco",
        category: "Principal Sponsor",
        role: "Ninong",
        family: "Dychioco Family",
        plusOne: false
    },
    {
        id: "SP-NINONG-002",
        name: "Ross Freeman",
        category: "Principal Sponsor",
        role: "Ninong",
        family: "Freeman Family",
        plusOne: false
    },
    {
        id: "SP-NINONG-003",
        name: "Joel Evangelista",
        category: "Principal Sponsor",
        role: "Ninong",
        family: "Evangelista Family",
        plusOne: false
    },
    {
        id: "SP-NINONG-004",
        name: "Dioni Pancho",
        category: "Principal Sponsor",
        role: "Ninong",
        family: "Pancho Family",
        plusOne: false
    },
    {
        id: "SP-NINONG-005",
        name: "Benigno Torres",
        category: "Principal Sponsor",
        role: "Ninong",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "SP-NINONG-006",
        name: "Alex Magtoto",
        category: "Principal Sponsor",
        role: "Ninong",
        family: "Magtoto Family",
        plusOne: false
    },
    {
        id: "SP-NINONG-007",
        name: "Ferdinand Magtang",
        category: "Principal Sponsor",
        role: "Ninong",
        family: "Magtang Family",
        plusOne: false
    },
    {
        id: "SP-NINONG-008",
        name: "Rodel Mallari",
        category: "Principal Sponsor",
        role: "Ninong",
        family: "Mallari Family",
        plusOne: false
    },
    {
        id: "SP-NINONG-009",
        name: "Roque Guevarra",
        category: "Principal Sponsor",
        role: "Ninong",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "SP-NINONG-010",
        name: "Juanito Dayrit",
        category: "Principal Sponsor",
        role: "Ninong",
        family: "Dayrit Family",
        plusOne: false
    },
    {
        id: "SP-NINONG-011",
        name: "Flaviano Balajadia",
        category: "Principal Sponsor",
        role: "Ninong",
        family: "Balajadia Family",
        plusOne: false
    },
    {
        id: "SP-NINONG-012",
        name: "Ramil Razon",
        category: "Principal Sponsor",
        role: "Ninong",
        family: "Razon Family",
        plusOne: false
    },
    {
        id: "SP-NINONG-013",
        name: "Henry Makabali",
        category: "Principal Sponsor",
        role: "Ninong",
        family: "Makabali Family",
        plusOne: false
    },
    {
        id: "SP-NINONG-014",
        name: "Diosdado David",
        category: "Principal Sponsor",
        role: "Ninong",
        family: "David Family",
        plusOne: false
    },
    {
        id: "SP-NINONG-015",
        name: "Howard Dizon",
        category: "Principal Sponsor",
        role: "Ninong",
        family: "Dizon Family",
        plusOne: false
    },


    // =====================================================
    // PARENTS
    // =====================================================

    {
        id: "PARENT-GROOM-001",
        name: "Antonio Baltazar Guevarra",
        category: "Family",
        role: "Groom's Father",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "PARENT-GROOM-002",
        name: "Carmelita Torres Guevarra",
        category: "Family",
        role: "Groom's Mother",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "PARENT-BRIDE-001",
        name: "Ramon Evangelista Due",
        category: "Family",
        role: "Bride's Father",
        family: "Due Family",
        plusOne: false
    },
    {
        id: "PARENT-BRIDE-002",
        name: "Mayrina David Due",
        category: "Family",
        role: "Bride's Mother",
        family: "Due Family",
        plusOne: false
    },


    // =====================================================
    // ENTOURAGE
    // =====================================================

    {
        id: "ENT-MOH-001",
        name: "Hilary Cabatana",
        category: "Entourage",
        role: "Maid of Honor",
        family: "Cabatana Family",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "ENT-MATRON-001",
        name: "Shaira Mae Taguines",
        category: "Entourage",
        role: "Matron of Honor",
        family: "Taguines Family",
        plusOne: false
    },

    {
        id: "ENT-BM-001",
        name: "Monica Due",
        category: "Entourage",
        role: "Bridesmaid",
        family: "Due Family",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "ENT-BM-002",
        name: "Monella Due",
        category: "Entourage",
        role: "Bridesmaid",
        family: "Due Family",
        plusOne: false
    },
    {
        id: "ENT-BM-003",
        name: "Vanessa David",
        category: "Entourage",
        role: "Bridesmaid",
        family: "David Family",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "ENT-BM-004",
        name: "Anjelica Cano",
        category: "Entourage",
        role: "Bridesmaid",
        family: "Cano Family",
        plusOne: false
    },
    {
        id: "ENT-BM-005",
        name: "Liz Camacho",
        category: "Entourage",
        role: "Bridesmaid",
        family: "Camacho Family",
        plusOne: false
    },
    {
        id: "ENT-BM-006",
        name: "Sharlene Anne Sedrome",
        category: "Entourage",
        role: "Bridesmaid",
        family: "Sedrome Family",
        plusOne: true,
        plusOneLimit: 7
    },
    {
        id: "ENT-BM-007",
        name: "Deniella Evangelista",
        category: "Entourage",
        role: "Bridesmaid",
        family: "Evangelista Family",
        plusOne: false
    },

    {
        id: "ENT-BESTMAN-001",
        name: "Aldus Delgado",
        category: "Entourage",
        role: "Best Man",
        family: "Delgado Family",
        plusOne: true,
        plusOneLimit: 1
    },

    {
        id: "ENT-GM-001",
        name: "Adrianne Tulod",
        category: "Entourage",
        role: "Groomsman",
        family: "Tulod Family",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "ENT-GM-002",
        name: "Isaiah Batac",
        category: "Entourage",
        role: "Groomsman",
        family: "Batac Family",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "ENT-GM-003",
        name: "Jerrold Faelnar",
        category: "Entourage",
        role: "Groomsman",
        family: "Faelnar Family",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "ENT-GM-004",
        name: "Kim Carlo Cruz",
        category: "Entourage",
        role: "Groomsman",
        family: "Cruz Family",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "ENT-GM-005",
        name: "Aaron Tayag",
        category: "Entourage",
        role: "Groomsman",
        family: "Tayag Family",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "ENT-GM-006",
        name: "Jhanssen Tan",
        category: "Entourage",
        role: "Groomsman",
        family: "Tan Family",
        plusOne: false
    },
    {
        id: "ENT-GM-007",
        name: "Sean Blanco",
        category: "Entourage",
        role: "Groomsman",
        family: "Blanco Family",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "ENT-GM-008",
        name: "Jeremy Taguines",
        category: "Entourage",
        role: "Groomsman",
        family: "Taguines Family",
        plusOne: false
    },

    {
        id: "ENT-RING-001",
        name: "Ezaiah Panti",
        category: "Entourage",
        role: "Ringbearer",
        family: "Panti Family",
        plusOne: false
    },

    {
        id: "ENT-FLOWER-001",
        name: "Zane Gabriel Almadrones",
        category: "Entourage",
        role: "Flower Bearer",
        family: "Almadrones Family",
        plusOne: false
    },
    {
        id: "ENT-FLOWER-002",
        name: "Yori Blanco",
        category: "Entourage",
        role: "Flower Bearer",
        family: "Blanco Family",
        plusOne: false
    },
    {
        id: "ENT-FLOWER-003",
        name: "Seth Ivan Almadrones",
        category: "Entourage",
        role: "Flower Bearer",
        family: "Almadrones Family",
        plusOne: false
    },
    {
        id: "ENT-FLOWER-004",
        name: "Audi Torres",
        category: "Entourage",
        role: "Flower Bearer",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "ENT-FLOWER-005",
        name: "Hera Carreon",
        category: "Entourage",
        role: "Flower Bearer",
        family: "Carreon Family",
        plusOne: false
    },


    // =====================================================
    // GUEVARRA FAMILY
    // =====================================================

    {
        id: "GUE-001",
        name: "Anita Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-002",
        name: "Edison Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-003",
        name: "Mariz Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-004",
        name: "Gaudly Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-005",
        name: "Glenze Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-006",
        name: "Gio Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-007",
        name: "Abner Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-008",
        name: "Yael Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-009",
        name: "Fenny Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-010",
        name: "Francis Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-011",
        name: "Harmony Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-012",
        name: "Francia Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-013",
        name: "John Kylle Carreon",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-014",
        name: "Auntie Melba Evangelista",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },

    // Joel Evangelista already exists as a Ninong.
    // We do NOT create a duplicate record.

    {
        id: "GUE-016",
        name: "Rogue Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-017",
        name: "Tess Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-018",
        name: "Clark Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-019",
        name: "Kyle Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },
    {
        id: "GUE-020",
        name: "Keno Guevarra",
        category: "Guest",
        family: "Guevarra Family",
        plusOne: false
    },


    // =====================================================
    // DAVID FAMILY
    // =====================================================

    {
        id: "DAV-001",
        name: "Des David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-002",
        name: "Erin David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-003",
        name: "Tita Miles David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-004",
        name: "Tita Emy Dayag",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-005",
        name: "Ramil Dayag",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-006",
        name: "Jessabel Dayag",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-007",
        name: "Camil Dayag",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-008",
        name: "Ryan Dayag",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-009",
        name: "Tita Alma David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-010",
        name: "Tito Tano David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },

    // Ruth David already exists as Ninang.

    {
        id: "DAV-012",
        name: "Tito Buda David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-013",
        name: "Tito Gandi David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-014",
        name: "Tito Joey David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-015",
        name: "Tita Lisa David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-016",
        name: "AJ David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-017",
        name: "Kapatid ni AJ",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-018",
        name: "Iraj David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-019",
        name: "Terrence David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-020",
        name: "Lawrence David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-021",
        name: "Santino David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-022",
        name: "Kenneth David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-023",
        name: "Tristan David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },
    {
        id: "DAV-024",
        name: "Kyla David",
        category: "Guest",
        family: "David Family",
        plusOne: false
    },


    // =====================================================
    // DUE FAMILY
    // =====================================================

    {
        id: "DUE-001",
        name: "Tita Gie Laforteza",
        category: "Guest",
        family: "Due Family",
        plusOne: false
    },
    {
        id: "DUE-002",
        name: "Tito Rick Laforteza",
        category: "Guest",
        family: "Due Family",
        plusOne: false
    },
    {
        id: "DUE-003",
        name: "Richard Laforteza",
        category: "Guest",
        family: "Due Family",
        plusOne: false
    },
    {
        id: "DUE-004",
        name: "Che Laforteza",
        category: "Guest",
        family: "Due Family",
        plusOne: false
    },
    {
        id: "DUE-005",
        name: "Ryan Laforteza",
        category: "Guest",
        family: "Due Family",
        plusOne: false
    },
    {
        id: "DUE-006",
        name: "Tito Restituto Due",
        category: "Guest",
        family: "Due Family",
        plusOne: false
    },
    {
        id: "DUE-007",
        name: "Tita Remy Due",
        category: "Guest",
        family: "Due Family",
        plusOne: false
    },
    {
        id: "DUE-008",
        name: "Marvin Due",
        category: "Guest",
        family: "Due Family",
        plusOne: false
    },
    {
        id: "DUE-009",
        name: "Allen Due",
        category: "Guest",
        family: "Due Family",
        plusOne: false
    },


    // =====================================================
    // TORRES FAMILY
    // =====================================================

    {
        id: "TOR-001",
        name: "Pacita Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-002",
        name: "Jona Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-003",
        name: "Jean Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-004",
        name: "Patrick Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "TOR-005",
        name: "Malou Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-006",
        name: "Camille Torres De Jesus",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-007",
        name: "Dexter De Jesus",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-008",
        name: "Sophia De Jesus",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-009",
        name: "Shaina Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-010",
        name: "James Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-011",
        name: "Mher Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-012",
        name: "Joseph Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-013",
        name: "Emily Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-014",
        name: "Arlyn Tolentino",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-015",
        name: "Allan Tolentino",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-016",
        name: "AJ Tolentino",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-017",
        name: "Alyanna Tolentino",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-018",
        name: "Marivic Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-019",
        name: "Nicole Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-020",
        name: "Nathalie Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-021",
        name: "Anthony Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-022",
        name: "Beatriz Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-023",
        name: "Angelo Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-024",
        name: "Analiza Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-025",
        name: "PJ Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-026",
        name: "Angelo JR Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },
    {
        id: "TOR-027",
        name: "Benny Torres",
        category: "Guest",
        family: "Torres Family",
        plusOne: false
    },


    // =====================================================
    // FAMILY & FRIENDS
    // =====================================================

    {
        id: "FRI-001",
        name: "Anton Adap",
        category: "Guest",
        family: "Family & Friends",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "FRI-002",
        name: "Maco Comandao",
        category: "Guest",
        family: "Family & Friends",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "FRI-003",
        name: "Andre Rubiano",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-004",
        name: "Jean Gatuz",
        category: "Guest",
        family: "Family & Friends",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "FRI-005",
        name: "Lea Wong",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-006",
        name: "Che Manapsal",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-007",
        name: "Joan Ayson",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-008",
        name: "Tito Jaypee",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-009",
        name: "Verna Cabatana",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-010",
        name: "Tito Antonio Cabatana",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-011",
        name: "Austin Cabatana",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-012",
        name: "Arielle Cabatana",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-013",
        name: "Darren Galang",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-014",
        name: "William Rider",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-015",
        name: "Sean Chester Dizon",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-016",
        name: "Rajean Vinas",
        category: "Guest",
        family: "Family & Friends",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "FRI-017",
        name: "Nathan Agulto",
        category: "Guest",
        family: "Family & Friends",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "FRI-018",
        name: "Paolo Miguel Gonzales",
        category: "Guest",
        family: "Family & Friends",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "FRI-019",
        name: "Harvey Guinto",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-020",
        name: "Papa ni Shai",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-021",
        name: "Aleen Baluyut",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-022",
        name: "Paulus Cunanan",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-023",
        name: "Justine Malikot",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-024",
        name: "Mama ni Kuya Eman",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-025",
        name: "Papa ni Kuya Eman",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-026",
        name: "Neil Panti",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-027",
        name: "Therese Panti",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-028",
        name: "Lance Soria",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-029",
        name: "John Tantuan",
        category: "Guest",
        family: "Family & Friends",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "FRI-030",
        name: "Graciela Vigidor",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-031",
        name: "Leo Angeli Martinez",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-032",
        name: "Reyna Cudiamat",
        category: "Guest",
        family: "Family & Friends",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "FRI-033",
        name: "Mymy Yamat",
        category: "Guest",
        family: "Family & Friends",
        plusOne: true,
        plusOneLimit: 1
    },
    {
        id: "FRI-034",
        name: "Evelyn",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-035",
        name: "Tita Noni",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-036",
        name: "Tito Oscar",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-037",
        name: "Ghaye",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-038",
        name: "Baby",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-039",
        name: "Lorie",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-040",
        name: "Lola Melda",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    },
    {
        id: "FRI-041",
        name: "Lola Ines",
        category: "Guest",
        family: "Family & Friends",
        plusOne: false
    }


];

 // =====================================================
        // LOADER
        // =====================================================
        window.addEventListener("load", function () {
            const loader = document.getElementById("loader");
            if (loader) {
                setTimeout(function () {
                    loader.classList.add("hidden");
                }, 700);
            }
        });

        // =====================================================
        // MOBILE MENU
        // =====================================================
        const mobileMenuButton = document.getElementById("mobileMenuButton");
        const navLinks = document.getElementById("navLinks");

        if (mobileMenuButton && navLinks) {
            mobileMenuButton.addEventListener("click", function () {
                navLinks.classList.toggle("open");
                mobileMenuButton.innerHTML =
                    navLinks.classList.contains("open") ? "×" : "☰";
            });

            document.querySelectorAll(".nav-links a").forEach(function (link) {
                link.addEventListener("click", function () {
                    navLinks.classList.remove("open");
                    mobileMenuButton.innerHTML = "☰";
                });
            });
        }

        // =====================================================
        // COUNTDOWN
        // =====================================================
        const weddingDate = new Date(CONFIG.wedding.date).getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const difference = weddingDate - now;

            const daysEl = document.getElementById("days");
            const hoursEl = document.getElementById("hours");
            const minutesEl = document.getElementById("minutes");
            const secondsEl = document.getElementById("seconds");

            if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

            if (difference <= 0) {
                daysEl.textContent = "000";
                hoursEl.textContent = "00";
                minutesEl.textContent = "00";
                secondsEl.textContent = "00";
                return;
            }

            const days = Math.floor(
                difference / (1000 * 60 * 60 * 24)
            );
            const hours = Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            );
            const minutes = Math.floor(
                (difference / (1000 * 60)) % 60
            );
            const seconds = Math.floor(
                (difference / 1000) % 60
            );

            daysEl.textContent = String(days).padStart(3, "0");
            hoursEl.textContent = String(hours).padStart(2, "0");
            minutesEl.textContent = String(minutes).padStart(2, "0");
            secondsEl.textContent = String(seconds).padStart(2, "0");
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);

        // =====================================================
        // SCROLL REVEAL
        // =====================================================
        const revealElements = document.querySelectorAll(".reveal");

        if ("IntersectionObserver" in window) {
            const revealObserver = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("visible");
                            revealObserver.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.12 }
            );

            revealElements.forEach(function (element) {
                revealObserver.observe(element);
            });
        } else {
            revealElements.forEach(function (element) {
                element.classList.add("visible");
            });
        }

        // =====================================================
        // FAQ
        // =====================================================
        document.querySelectorAll(".faq-question").forEach(function (button) {
            button.addEventListener("click", function () {
                const item = button.parentElement;
                const alreadyActive = item.classList.contains("active");

                document.querySelectorAll(".faq-item").forEach(function (faq) {
                    faq.classList.remove("active");
                });

                if (!alreadyActive) {
                    item.classList.add("active");
                }
            });
        });

        // =====================================================
       
        // =====================================================
        // LEAFLET MAP
        // =====================================================
        if (typeof L !== "undefined" && document.getElementById("map")) {
            const map = L.map("map", {
                scrollWheelZoom: false
            }).setView(
                [CONFIG.venue.latitude, CONFIG.venue.longitude],
                CONFIG.map.zoom
            );

            L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {
                    maxZoom: 19,
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }
            ).addTo(map);

            const marker = L.marker([
                CONFIG.venue.latitude,
                CONFIG.venue.longitude
            ]).addTo(map);

            marker
                .bindPopup(
                    `<strong>${CONFIG.venue.name}</strong><br>${CONFIG.venue.address}`
                )
                .openPopup();

            const directions = document.getElementById("mapDirections");

            if (directions) {
                directions.href =
    "https://www.google.com/maps/search/?api=1&query=15.0828281,120.5490793";
            }
        }

        // =====================================================
        // QR CODE
        // =====================================================
        const qrContainer = document.getElementById("qrcode");

        if (qrContainer && typeof QRCode !== "undefined") {
            new QRCode(qrContainer, {
                text: CONFIG.qrUrl,
                width: 220,
                height: 220,
                colorDark: "#111111",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });

            const downloadQR = document.getElementById("downloadQR");

            if (downloadQR) {
                downloadQR.addEventListener("click", function () {
                    const canvas = qrContainer.querySelector("canvas");
                    const image = qrContainer.querySelector("img");

                    const url = canvas
                        ? canvas.toDataURL("image/png")
                        : image
                            ? image.src
                            : null;

                    if (!url) {
                        alert("QR code is not ready yet.");
                        return;
                    }

                    const link = document.createElement("a");
                    link.href = url;
                    link.download = "wedding-qr-code.png";
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                });
            }
        }

        // =====================================================
        // RSVP — GOOGLE SHEETS LOOKUP
        // =====================================================
        const rsvpForm = document.getElementById("rsvpForm");
        const guestNameInput = document.getElementById("guestName");
        
        const findGuestButton = document.getElementById("findGuestButton");
        const guestInvitation = document.getElementById("guestInvitation");
        const guestGreeting = document.getElementById("guestGreeting");
        const rsvpFields = document.getElementById("rsvpFields");
        const submitArea = document.getElementById("submitArea");
        const rsvpMessage = document.getElementById("rsvpMessage");
        const attendance = document.getElementById("attendance");
        const guestsSelect = document.getElementById("guests");
        const plusOneName = document.getElementById("plusOneName");

        let currentGuest = null;

        function showMessage(message, isError) {
            if (!rsvpMessage) return;

            rsvpMessage.textContent = message;
            rsvpMessage.style.color = isError
                ? "#c98989"
                : "var(--gold-light)";
        }

        function roleLabel(guest) {
            if (guest.role) {
                return guest.role;
            }

            if (guest.category === "Principal Sponsor") {
                return "Principal Sponsor";
            }

            if (guest.category === "Parent") {
                return "Parent of the Couple";
            }

            return "Guest";
        }

        function buildGreeting(guest) {
            const role = roleLabel(guest);

            if (guest.category === "Entourage") {
                return `
                    <div style="text-align:center; padding:20px 0;">
                        <div style="font-family:var(--serif); font-size:34px; color:var(--cream);">
                            Hello, ${escapeHtml(guest.name)}! ❤️
                        </div>
                        <div style="margin-top:8px; color:var(--gold); font-size:10px; letter-spacing:2px; text-transform:uppercase;">
                            You're one of our ${escapeHtml(role)}
                        </div>
                        <div style="margin-top:12px; color:var(--muted); font-size:11px;">
                            We're so happy to have you as part of CED & MO's special day.
                        </div>
                    </div>
                `;
            }

            if (guest.category === "Principal Sponsor") {
                return `
                    <div style="text-align:center; padding:20px 0;">
                        <div style="font-family:var(--serif); font-size:34px; color:var(--cream);">
                            Hello, ${escapeHtml(guest.name)}! ❤️
                        </div>
                        <div style="margin-top:8px; color:var(--gold); font-size:10px; letter-spacing:2px; text-transform:uppercase;">
                            You're one of our ${escapeHtml(role)}
                        </div>
                    </div>
                `;
            }

            return `
                <div style="text-align:center; padding:20px 0;">
                    <div style="font-family:var(--serif); font-size:34px; color:var(--cream);">
                        Hello, ${escapeHtml(guest.name)}! ❤️
                    </div>
                    <div style="margin-top:8px; color:var(--muted); font-size:11px;">
                        You're invited to celebrate with CED & MO.
                    </div>
                </div>
            `;
        }

        function setupGuestCount(limit) {
            if (!guestsSelect) return;

            guestsSelect.innerHTML = "";

            const max = Math.max(1, 1 + Number(limit || 0));

            for (let i = 1; i <= max; i++) {
                const option = document.createElement("option");
                option.value = String(i);
                option.textContent = String(i);
                guestsSelect.appendChild(option);
            }
        }

        function escapeHtml(value) {
            return String(value || "")
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        async function findGuest() {
            const name = guestNameInput
                ? guestNameInput.value.trim()
                : "";

            if (!name) {
                showMessage("Please enter your full name.", true);
                return;
            }

            findGuestButton.disabled = true;
            findGuestButton.textContent = "Finding your invitation...";
            showMessage("", false);

            try {
                const url =
                    `${CONFIG.rsvpApiUrl}?action=findGuest&name=${encodeURIComponent(name)}`;

                const response = await fetch(url, {
                    method: "GET",
                    cache: "no-store"
                });

                if (!response.ok) {
                    throw new Error("Unable to contact the RSVP server.");
                }

                const result = await response.json();

                if (!result.success || !result.guest) {
                    currentGuest = null;

                    if (guestInvitation) {
                        guestInvitation.style.display = "none";
                    }

                    if (rsvpFields) {
                        rsvpFields.style.display = "none";
                    }

                    if (submitArea) {
                        submitArea.style.display = "none";
                    }

                    showMessage(
                        "We couldn't find that name on the invitation list. Please check the spelling and try again.",
                        true
                    );

                    return;
                }

                currentGuest = result.guest;

                if (guestInvitation && guestGreeting) {
                    guestGreeting.innerHTML = buildGreeting(currentGuest);
                    guestInvitation.style.display = "block";
                }

                setupGuestCount(currentGuest.plusOneLimit);

                if (rsvpFields) {
                    rsvpFields.style.display = "block";
                }

                if (submitArea) {
                    submitArea.style.display = "flex";
                }

                showMessage(
                    "Your invitation was found. Please complete your RSVP below.",
                    false
                );

            } catch (error) {
                console.error(error);

                showMessage(
                    "We couldn't connect to the RSVP system. Please try again.",
                    true
                );
            } finally {
                findGuestButton.disabled = false;
                findGuestButton.textContent = "Find My Invitation";
            }
        }

        if (findGuestButton) {
            findGuestButton.addEventListener("click", findGuest);
        }

        if (guestNameInput) {
            guestNameInput.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    findGuest();
                }
            });
        }
        // =====================================================
// RSVP NAME AUTOCOMPLETE
// =====================================================

const nameSuggestions = document.getElementById("nameSuggestions");

if (guestNameInput && nameSuggestions) {

    guestNameInput.addEventListener("input", function () {

        const searchText = this.value.trim().toLowerCase();

        // Clear old suggestions
        nameSuggestions.innerHTML = "";

        // Hide suggestions if nothing is typed
        if (!searchText) {
            nameSuggestions.style.display = "none";
            return;
        }

        // Search the existing guest list
        
       const matches = GUEST_LIST.filter(function (guest) {
    return guest.name.toLowerCase().startsWith(searchText);
});

const limitedMatches = matches.slice(0, 3);

        // Show only the first 6 matches
       

        // Hide if there are no matches
        if (limitedMatches.length === 0) {
            nameSuggestions.style.display = "none";
            return;
        }

        // Create each suggestion
        limitedMatches.forEach(function (guest) {

            const suggestion = document.createElement("div");

            suggestion.className = "suggestion-item";

            suggestion.textContent = guest.name;

            suggestion.addEventListener("click", function () {

                // Put the selected guest's name into the input
                guestNameInput.value = guest.name;

                // Clear and hide suggestions
                nameSuggestions.innerHTML = "";
                nameSuggestions.style.display = "none";

                // Keep the input focused
                guestNameInput.focus();
            });

            nameSuggestions.appendChild(suggestion);
        });

        // Show suggestions
        nameSuggestions.style.display = "block";
    });


    // Hide suggestions when clicking outside
    document.addEventListener("click", function (event) {

        if (!event.target.closest(".name-input-wrapper")) {
            nameSuggestions.innerHTML = "";
            nameSuggestions.style.display = "none";
        }

    });
}

        if (attendance) {
            attendance.addEventListener("change", updatePlusOneVisibility);
        }

        function updatePlusOneVisibility() {
            if (!plusOneName || !attendance || !guestsSelect || !currentGuest) return;

            const attending = attendance.value === "Attending";
            const guestCount = Number(guestsSelect.value || 1);
            const hasPlusOne = Number(currentGuest.plusOneLimit || 0) > 0;
            const needsPlusOneName = guestCount > 1;

            plusOneName.parentElement.style.display =
                attending && hasPlusOne && needsPlusOneName ? "flex" : "none";

            if (!attending || !hasPlusOne || !needsPlusOneName) {
                plusOneName.value = "";
            }
        }

        if (guestsSelect) {
            guestsSelect.addEventListener("change", updatePlusOneVisibility);
        }

        if (rsvpForm) {
            rsvpForm.addEventListener("submit", async function (event) {
                event.preventDefault();

                if (!currentGuest) {
                    showMessage("Please find your invitation first.", true);
                    return;
                }

                if (!attendance.value) {
                    showMessage("Please select your attendance.", true);
                    return;
                }

                const submitButton = rsvpForm.querySelector('button[type="submit"]');
                const originalText = submitButton ? submitButton.textContent : "Send RSVP";

                if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.textContent = "Saving your RSVP...";
                }

                try {
                    const attending = attendance.value === "Attending";
                    const numberAttending = attending
                        ? Number(guestsSelect.value || 1)
                        : 0;

                    // Google Apps Script is more reliable here with a GET request.
                    // The API validates the guest ID server-side before writing to the sheet.
                    const params = new URLSearchParams();
                    params.set("action", "submitRSVP");
                    params.set("guestId", String(currentGuest.id || ""));
                    params.set("name", String(currentGuest.name || ""));
                    params.set("attendance", attendance.value);
                    params.set("numberAttending", String(numberAttending));
                    params.set("plusOneName", plusOneName ? plusOneName.value.trim() : "");
                    params.set("message", document.getElementById("message")?.value.trim() || "");

                    const response = await fetch(
                        `${CONFIG.rsvpApiUrl}?${params.toString()}`,
                        { method: "GET", cache: "no-store" }
                    );

                    if (!response.ok) {
                        throw new Error("Unable to save RSVP.");
                    }

                    const result = await response.json();

                    if (!result.success) {
                        throw new Error(result.message || "RSVP could not be saved.");
                    }

                    showMessage(
                        "Thank you! Your RSVP has been saved successfully. ❤️",
                        false
                    );

                    if (submitButton) {
                        submitButton.textContent = "RSVP Saved ✓";
                    }

                } catch (error) {
                    console.error("RSVP submission error:", error);
                    showMessage(
                        "We couldn't save your RSVP. Please try again.",
                        true
                    );

                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.textContent = originalText;
                    }
                }
            });
        }

        // =====================================================
        // PREVENT IMAGE DRAGGING
        // =====================================================
        document.querySelectorAll("img").forEach(function (image) {
            image.addEventListener("dragstart", function (event) {
                event.preventDefault();
            });
        });

        document.title = `${CONFIG.couple.display} — Our Wedding`;