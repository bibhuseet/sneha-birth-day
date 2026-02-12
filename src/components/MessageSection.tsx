import { motion } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const MessageSection = () => {
  const { ref, isVisible } = useScrollFadeIn(0.2);

  return (
    <section className="py-20 px-6 bg-card/50" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-secondary/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft border border-border/50 text-center"
        >
          <h2 className="font-cursive text-4xl md:text-5xl text-foreground mb-6">
            For You, Sneha 💌
          </h2>

          <div className="space-y-5 font-body text-foreground/80 leading-relaxed text-base md:text-lg text-center">
            <p>
              The only thing special about this message<br />
              is that you are reading it.
            </p>
            <p>Anyways…</p>
            <p>
              I once heard Sourabh Dwivedi say,<br />
              <em>"Agar aap kisi aise insaan se mile hain jiski wajah se aapne bahut khushi mehsoos ki hai, toh unhe zaroor bataiyega."</em>
            </p>
            <p>So today, I just want to tell you this.</p>
            <p>
              Thank you for making me smile.<br />
              Thank you for making me happy on days when I felt sad, frustrated, or anxious —<br />
              even on days when you were the reason behind those feelings.
            </p>
            <p>
              Thank you for being understanding during the harsh moments,<br />
              when you had every reason to be angry.<br />
              And even during the simple moments —<br />
              when you didn't call back<br />
              or didn't explain why!
            </p>
            <p>I want to promise you something.</p>
            <p>
              I promise to stay curious about why you act so tough.<br />
              I promise that you will never have to earn my presence —<br />
              you already have it.<br />
              And<br />
              I promise to keep showing up at your doorstep every Sunday,<br />
              saying, "Chale Buli Jiba."
            </p>
            <p>And before this starts feeling too cheesy to read…</p>
            <p>
              I just want to say —
            </p>
            <p className="font-cursive text-2xl text-primary">
              Happy Birthday. ✨
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 font-cursive text-2xl md:text-3xl text-primary"
          >
            With all my love 💖
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 text-3xl"
          >
            🎂🌸✨💝🎁
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="text-center mt-16 text-muted-foreground font-body text-sm"
      >
        <p>Made with 💖 for Sneha</p>
      </motion.footer>
    </section>
  );
};

export default MessageSection;
