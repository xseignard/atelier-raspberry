import React from 'react';
import {
	Appear,
	Deck,
	Heading,
	Image,
	Link,
	ListItem,
	List,
	Slide,
	Spectacle,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from 'spectacle-code-slide';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

// images
import raspberrypi from '../assets/raspberrypi.png';
import plug from '../assets/plug.gif';
import exams from '../assets/exams.gif';
import badass from '../assets/badass.gif';
import demo from '../assets/demo.gif';
import alignement from '../assets/alignement.gif';
import ladder from '../assets/ladder.gif';
import flex from '../assets/flex.gif';
import clap from '../assets/clap.gif';

// code
import imports from '../assets/code/imports.example';
import definition from '../assets/code/definition.example';
import boucle from '../assets/code/boucle.example';
import all from '../assets/code/all.example';

preloader({
	raspberrypi,
	plug,
	exams,
	badass,
	demo,
	alignement,
	ladder,
	flex,
	clap,
});

const theme = createTheme({
	primary: '#c61931',
});

const Presentation = () => (
	<Spectacle theme={theme}>
		<Deck transition={['zoom', 'fade']} transitionDuration={500}>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					Raspberry Pi
				</Heading>
				<Heading size={1} fit caps>
					c'est bien!
				</Heading>
				<Heading size={1} fit caps textColor="black">
					mangez-en!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Image src={raspberrypi} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Raspberry, petit mais puissant!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Raspberry, kézako?
				</Heading>
				<List>
					<Appear><ListItem>Nano ordinateur</ListItem></Appear>
					<Appear><ListItem>Un environnement GNU/Linux</ListItem></Appear>
					<Appear><ListItem>Multiples usages</ListItem></Appear>
					<Appear><ListItem>S'interfacer avec le monde réel</ListItem></Appear>
					<Appear><ListItem><Link href="https://www.raspberrypi.org/" target="_blank">https://www.raspberrypi.org/</Link></ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Que faire avec?
				</Heading>
				<List>
					<Appear><ListItem>une console rétro</ListItem></Appear>
					<Appear><ListItem>un média center</ListItem></Appear>
					<Appear><ListItem>une radio connectée</ListItem></Appear>
					<Appear><ListItem>un lecteur vidéo interactif</ListItem></Appear>
					<Appear><ListItem>des expositions</ListItem></Appear>
					<Appear><ListItem>etc.</ListItem></Appear>
					<Appear><ListItem>etc.</ListItem></Appear>
					<Appear><ListItem>etc.</ListItem></Appear>
					<Appear><ListItem>c'est inifini!</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={demo} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Demos!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<iframe width="800" height="450" src="https://player.vimeo.com/video/146229544?color=ffffff&title=0&byline=0&portrait=0" frameBorder="0" />
			</Slide>
			<Slide bgColor="primary">
				<iframe width="800" height="450" src="https://player.vimeo.com/video/166505758?color=ffffff&title=0&byline=0&portrait=0" frameBorder="0" />
			</Slide>
			<Slide bgColor="primary">
				<iframe width="800" height="450" src="https://player.vimeo.com/video/99172004?color=ffffff&title=0&byline=0&portrait=0" frameBorder="0" />
			</Slide>
			<Slide bgColor="primary">
				<Image src={plug} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Un ordinateur peu cher et multifonctions
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<List>
					<Appear><ListItem>Un ordinateur, pour apprendre à bidouiller sans risquer son bel ordi!</ListItem></Appear>
					<Appear><ListItem><Link href="https://github.com/guysoft/FullPageOS">Un dashboard</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://retropie.org.uk/">Une console de jeu rétro</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://kodi.tv/">Un média center</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://ofxpimapper.com/">Un system de mapping standalone</Link></ListItem></Appear>
					<Appear><ListItem>et tellement plus.</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={exams} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Coder un player vidéo interactif!
				</Heading>
			</Slide>
			<CodeSlide
				transition={[]}
				lang="markup"
				code={all}
				ranges={[]}
			/>
			<CodeSlide
				transition={[]}
				lang="markup"
				code={imports}
				ranges={[]}
			/>
			<CodeSlide
				transition={[]}
				lang="markup"
				code={definition}
				ranges={[]}
			/>
			<CodeSlide
				transition={[]}
				lang="markup"
				code={boucle}
				ranges={[]}
			/>
			<Slide bgColor="primary">
				<Image src={ladder} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Se documenter sur Raspberry Pi
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Quelques ressources
				</Heading>
				<List>
					<Appear><ListItem><Link href="https://www.raspberrypi.org/community/">https://www.raspberrypi.org/community/</Link></ListItem></Appear>
					<Appear><ListItem><Link href="http://www.framboise314.fr/">http://www.framboise314.fr/</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://fr.pinterest.com/explore/raspberry-pi-projects/">https://fr.pinterest.com/explore/raspberry-pi-projects/</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://howchoo.com/g/mwnlytk3zmm/how-to-add-a-power-button-to-your-raspberry-pi">Boutton On/Off</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://pinout.xyz/">Agencement des pins</Link></ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Place à l'expérimentation!
				</Heading>
				<List>
					<Appear><ListItem>Réaliser un RetroPie</ListItem></Appear>
					<Appear><ListItem>Réaliser un ofxPiMapper</ListItem></Appear>
					<Appear><ListItem>Réaliser un Kodi</ListItem></Appear>
					<Appear><ListItem>Réaliser un FullPageOS</ListItem></Appear>
					<Appear><ListItem>Réaliser un player vidéo interactif</ListItem></Appear>
				</List>
			</Slide>
		</Deck>
	</Spectacle>
);

export default Presentation;
