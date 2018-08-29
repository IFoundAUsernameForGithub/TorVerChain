/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for torverchain', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be torverchain', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('torverchain');
    })
  });

  it('network-name should be torverchain@0.2.6-deploy.4',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('torverchain@0.2.6-deploy.4.bna');
    });
  });

  it('navbar-brand should be torverchain',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('torverchain');
    });
  });

  
    it('Test component should be loadable',() => {
      page.navigateTo('/Test');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Test');
      });
    });

    it('Test table should have 5 columns',() => {
      page.navigateTo('/Test');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('Esame component should be loadable',() => {
      page.navigateTo('/Esame');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Esame');
      });
    });

    it('Esame table should have 11 columns',() => {
      page.navigateTo('/Esame');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(11); // Addition of 1 for 'Action' column
      });
    });
  
    it('BozzaCertificato component should be loadable',() => {
      page.navigateTo('/BozzaCertificato');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('BozzaCertificato');
      });
    });

    it('BozzaCertificato table should have 6 columns',() => {
      page.navigateTo('/BozzaCertificato');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });
  
    it('Certificato component should be loadable',() => {
      page.navigateTo('/Certificato');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Certificato');
      });
    });

    it('Certificato table should have 10 columns',() => {
      page.navigateTo('/Certificato');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(10); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Ente component should be loadable',() => {
      page.navigateTo('/Ente');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Ente');
      });
    });

    it('Ente table should have 6 columns',() => {
      page.navigateTo('/Ente');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });
  
    it('Business component should be loadable',() => {
      page.navigateTo('/Business');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Business');
      });
    });

    it('Business table should have 7 columns',() => {
      page.navigateTo('/Business');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });
  
    it('Universita component should be loadable',() => {
      page.navigateTo('/Universita');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Universita');
      });
    });

    it('Universita table should have 7 columns',() => {
      page.navigateTo('/Universita');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });
  
    it('Member component should be loadable',() => {
      page.navigateTo('/Member');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Member');
      });
    });

    it('Member table should have 10 columns',() => {
      page.navigateTo('/Member');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(10); // Addition of 1 for 'Action' column
      });
    });
  
    it('Studente component should be loadable',() => {
      page.navigateTo('/Studente');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Studente');
      });
    });

    it('Studente table should have 11 columns',() => {
      page.navigateTo('/Studente');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(11); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('AuthorizeAccess component should be loadable',() => {
      page.navigateTo('/AuthorizeAccess');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('AuthorizeAccess');
      });
    });
  
    it('RevokeAccess component should be loadable',() => {
      page.navigateTo('/RevokeAccess');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RevokeAccess');
      });
    });
  
    it('RilasciaCertificato component should be loadable',() => {
      page.navigateTo('/RilasciaCertificato');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RilasciaCertificato');
      });
    });
  
    it('RettificaCertificato component should be loadable',() => {
      page.navigateTo('/RettificaCertificato');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RettificaCertificato');
      });
    });
  
    it('RegistraEsame component should be loadable',() => {
      page.navigateTo('/RegistraEsame');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RegistraEsame');
      });
    });
  

});