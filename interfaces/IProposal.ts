// Generated interfaces for ease of use

interface Metadata {
  ObjectType: string;
  Omschrijving: string;
  Titel: string;
}

interface Prijs {
  GeenExtraKosten: boolean;
  HuurAbbreviation: string;
  Huurprijs?: any;
  HuurprijsOpAanvraag: string;
  HuurprijsTot?: any;
  KoopAbbreviation: string;
  Koopprijs: number;
  KoopprijsOpAanvraag: string;
  KoopprijsTot: number;
  OriginelePrijs?: any;
  VeilingText: string;
}

interface Project {
  AantalKamersTotEnMet?: any;
  AantalKamersVan?: any;
  AantalKavels?: any;
  Adres?: any;
  FriendlyUrl?: any;
  GewijzigdDatum?: any;
  GlobalId?: any;
  HoofdFoto: string;
  IndIpix: boolean;
  IndPDF: boolean;
  IndPlattegrond: boolean;
  IndTop: boolean;
  IndVideo: boolean;
  InternalId: string;
  MaxWoonoppervlakte?: any;
  MinWoonoppervlakte?: any;
  Naam?: any;
  Omschrijving?: any;
  OpenHuizen: any[];
  Plaats?: any;
  Prijs?: any;
  PrijsGeformatteerd?: any;
  PublicatieDatum?: any;
  Type: number;
  Woningtypen?: any;
}

interface PromoLabel {
  HasPromotionLabel: boolean;
  PromotionPhotos: string[];
  PromotionPhotosSecure: string[];
  PromotionType: number;
  RibbonColor: number;
  RibbonText?: any;
  Tagline: string;
}

interface Object {
  AangebodenSindsTekst: string;
  AanmeldDatum: Date;
  AantalBeschikbaar?: any;
  AantalKamers: number;
  AantalKavels?: any;
  Aanvaarding: string;
  Adres: string;
  Afstand: number;
  BronCode: string;
  ChildrenObjects: any[];
  DatumAanvaarding?: any;
  DatumOndertekeningAkte?: any;
  Foto: string;
  FotoLarge: string;
  FotoLargest: string;
  FotoMedium: string;
  FotoSecure: string;
  GewijzigdDatum?: any;
  GlobalId: number;
  GroupByObjectType: string;
  Heeft360GradenFoto: boolean;
  HeeftBrochure: boolean;
  HeeftOpenhuizenTopper: boolean;
  HeeftOverbruggingsgrarantie: boolean;
  HeeftPlattegrond: boolean;
  HeeftTophuis: boolean;
  HeeftVeiling: boolean;
  HeeftVideo: boolean;
  HuurPrijsTot?: any;
  Huurprijs?: any;
  HuurprijsFormaat?: any;
  Id: string;
  InUnitsVanaf?: any;
  IndProjectObjectType: boolean;
  IndTransactieMakelaarTonen?: any;
  IsSearchable: boolean;
  IsVerhuurd: boolean;
  IsVerkocht: boolean;
  IsVerkochtOfVerhuurd: boolean;
  Koopprijs: number;
  KoopprijsFormaat: string;
  KoopprijsTot: number;
  Land?: any;
  MakelaarId: number;
  MakelaarNaam: string;
  MobileURL: string;
  Note?: any;
  OpenHuis: any[];
  Oppervlakte: number;
  Perceeloppervlakte: number;
  Postcode: string;
  Prijs: Prijs;
  PrijsGeformatteerdHtml: string;
  PrijsGeformatteerdTextHuur: string;
  PrijsGeformatteerdTextKoop: string;
  Producten: string[];
  Project: Project;
  ProjectNaam?: any;
  PromoLabel: PromoLabel;
  PublicatieDatum: Date;
  PublicatieStatus: number;
  SavedDate?: any;
  SoortAanbod: number;
  StartOplevering?: any;
  TimeAgoText?: any;
  TransactieAfmeldDatum?: any;
  TransactieMakelaarId?: any;
  TransactieMakelaarNaam?: any;
  TypeProject: number;
  URL: string;
  VerkoopStatus: string;
  WGS84_X: number;
  WGS84_Y: number;
  WoonOppervlakteTot: number;
  Woonoppervlakte: number;
  Woonplaats: string;
  ZoekType: number[];
}

interface Paging {
  AantalPaginas: number;
  HuidigePagina: number;
  VolgendeUrl: string;
  VorigeUrl: string;
}

export interface IProposal {
  AccountStatus: number;
  EmailNotConfirmed: boolean;
  ValidationFailed: boolean;
  ValidationReport?: any;
  Website: number;
  Metadata: Metadata;
  Objects: Object[];
  Paging: Paging;
  TotaalAantalObjecten: number;
}
