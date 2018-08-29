import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.torverchain{
   export class Address {
      street: string;
      house: string;
      city: string;
      country: string;
      zip: string;
   }
   export class Test extends Asset {
      id: string;
      nome: string;
      descrizione: string;
      enteSvolgimento: Ente;
   }
   export class Esame extends Test {
      candidato: Member;
      data: string;
      voto: string;
      programma: string;
      crediti: number;
      ssd: string;
   }
   export class BozzaCertificato extends Asset {
      idcert: string;
      titolo: string;
      descrizione: string;
      testObbligatori: Esame[];
      enteRilascio: Ente;
   }
   export class Certificato extends BozzaCertificato {
      votazione: string;
      dataRilascio: string;
      valido: boolean;
      member: Member;
   }
   export class Ente extends Participant {
      id: string;
      address1: Address;
      addresses: Address[];
      country: string;
      postcode: string;
   }
   export class Business extends Ente {
      partitaIVA: string;
   }
   export class Universita extends Ente {
      nomeUniversita: string;
   }
   export class Member extends Participant {
      email: string;
      firstName: string;
      lastName: string;
      codiceFiscale: string;
      dob: Date;
      address: Address;
      authorized: string[];
      testSostenuti: Esame[];
      certificati: Certificato[];
   }
   export class Studente extends Member {
      matricola: string;
   }
   export abstract class MemberTransaction extends Transaction {
      memberId: string;
   }
   export class AuthorizeAccess extends MemberTransaction {
   }
   export class RevokeAccess extends MemberTransaction {
   }
   export class RilasciaCertificato extends Transaction {
      certificato: BozzaCertificato;
      idCertificato: string;
      dataRilascio: string;
      votazione: string;
      calcolaMedia: boolean;
      calcolaMediaPonderata: boolean;
      member: Member;
   }
   export class RettificaCertificato extends Transaction {
      certificatoVecchio: Certificato;
      certificato: BozzaCertificato;
      dataRilascio: string;
      votazione: string;
      valido: boolean;
   }
   export class RegistraEsame extends Transaction {
      id: string;
      data: string;
      voto: string;
      programma: string;
      crediti: number;
      ssd: string;
      enteSvolgimento: Ente;
      sostenitore: Member;
      testSostenuto: Test;
   }
   export class EventoRettificaCertificato extends Event {
      rettificato: RettificaCertificato;
   }
   export class MemberEvent extends Event {
      memberTransaction: MemberTransaction;
   }
// }
