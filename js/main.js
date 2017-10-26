/**
 * @file main.js -- Start of the legacy project.
 * @version 1.1
 * @author Jay Chowdhary <jayc.chowdhary@gmail.com>
 */

class Legacy {
    constructor() {
        this.detour = document.getElementById('init');
        this.virtualProtect = document.getElementById('virtualprotect');

        /** Constants */
        this.CORSAGE = 'corsage';
    }

    /** Command handler -- You should read this. */
    handleCommand(query) {
        console.log(`Client executed command: ${query}`);
        switch (query) {
            case '133 221 333 123 111':
                console.log("Soon.");
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

        self.virtualProtect.appendChild(client);

        client.addEventListener('keypress', function(e) {
            // 'Enter' key.
            if ((e.keyCode || e.which) === 13) {
                self.handleCommand(this.value);
                e.preventDefault();

                this.value = "";
            }
        }, false);

        client.focus();
    }

    hook() {
        let self = this;

        self.detour.addEventListener('animationend', function(e) {
            self.secret();
            self.virtualProtect.classList.remove('hide');
        }, false);
    }
}