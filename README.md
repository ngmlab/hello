hello
=====

Phonegap project for testing purposes.

TL;DR klick auf den Link.

Hier ein kleines Tutorial, wie man eine Phonegap installiert, eine App baut und ausführt.
http://docs.phonegap.com/en/3.5.0/guide_cli_index.md.html#The%20Command-Line%20Interface

Das Projekt das ich hier aufgesetzt habe ist eine Art HelloWorld. Zum testen einfach mal clonen und mit

    $ cd path/to/hello
    $ phonegap run android


mit angeschlossenem (Android) Tablet/Phone laufen lassen. Dazu benötigt ihr die Android SDK. Steht genauer auch hinter dem Link oben. Habt ihr kein Android Gerät öffnet Phonegap automatisch einen Emulator, aber das läuft relativ lahm.

IPhones dürften leider nur unter OS X mit xcode zum testen geeignet sein.

### Zur Architektur:
Im Verzeichnis www/js liegt eine MainComponent.js die meiner Meinung nach selbsterklärend ist. Mit zusätlichen Funktionen kann mit onLoad() auf dem Gerüst aufgebaut werden.
