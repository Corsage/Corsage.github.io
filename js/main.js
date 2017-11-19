/**
 * @file main.js -- Start of the legacy project.
 * @version 1.1
 * @author Jay Chowdhary <jayc.chowdhary@gmail.com>
 */

class Legacy {
    constructor() {
        this.detour = document.getElementById('init');
        this.virtualProtect = document.getElementById('virtualprotect');
    }

    generateHelp() {
        let self = this;

        let help = document.createElement('code');
        help.innerHTML = 'Available public commands: "about", "portfolio", "contact", "blog".';
        self.virtualProtect.appendChild(help);

        window.setTimeout(function() {
            self.virtualProtect.removeChild(help);
        }, 5000);
    }

    /** Command handler -- You should read this. */
    handleCommand(query) {
        console.log(`Client executed command: ${query}`);
        switch (query.toUpperCase()) {
            case 'HELP':
                this.generateHelp();
                break;

            case '133 221 333 123 111':
                window.location.assign('http://www.kusowiabu.pw');
                break;
        }
    }

    /** Build 'terminal' for inputs. */
    secret() {
        let self = this;

        // User-input.
        let client = document.createElement('textarea');
        client.setAttribute('id', 'client');
        client.setAttribute('rows', '1');
        client.setAttribute('tabindex', '1');


        let caption = document.createElement('p');
        caption.innerHTML = 'Type "help" for help.';

        self.virtualProtect.appendChild(client);
        self.virtualProtect.appendChild(caption);

        client.addEventListener('keypress', function(e) {
            // 'Enter' key.
            if ((e.keyCode || e.which) === 13) {
                self.handleCommand(this.value);
                e.preventDefault();

                this.value = "";
            }
        }, false);
    }

    hook() {
        let self = this;

        self.detour.addEventListener('animationend', function(e) {
            self.secret();
            self.virtualProtect.classList.remove('hide');
            document.getElementById('client').focus();
        }, false);
    }
}
