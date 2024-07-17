
import styles from "./Hero.module.css";

export default function Hero() {
  return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Hi I'm Tharun</h1>
				<p className={styles.description}>
        I'm a Aspiring software developer passionate about crafting elegant code, solving complex problems,
                and continuously learning to innovate in the ever-evolving world of technology.
        </p>
				<a
					href="mailto:tharunbalaji110@gmail.com"
					className={styles.contactBtn}
				>
					Contact Me
				</a>
			</div>
			<img
				src="/assets/hero/MyPhoto.png"
				alt="HeroImage of me"
				className={styles.heroImg}
			/>
			<div className={styles.topBlur} />
			<div className={styles.bottomBlur} />
		</section>
  );
}

