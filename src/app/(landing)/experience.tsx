export const ExperienceSection = () => (
  <section>
    <h2 className="mb-8 text-2xl font-bold tracking-wide">Experience</h2>

    <div className="flex flex-col gap-8 md:flex-row">
      <div>
        <h3 className="text-xl font-semibold">Fullstack Developer</h3>
        <p className="mb-2 text-muted-foreground/50">2022-Present</p>

        <p className="text-muted-foreground">
          I have been working as a freelance fullstack developer building web
          applications for clients around the world. This includes UI/UX design,
          database and architecture design, frontend and backend development.
          This role has exposed me to a wide range of technologies.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">
          BSc Computer Science & Mathematics
        </h3>
        <p className="mb-2 text-muted-foreground/50">University of Cape Town</p>

        <p className="text-muted-foreground">
          I have been fortunate to study at the University of Cape Town where I
          received a BSc in Computer Science and Mathematics. This has given me
          a solid foundation in software development and problem solving. Some
          notable courses I have taken include:
        </p>
        <ul className="mt-2 list-inside list-[upper-roman] pl-2">
          <li>Algorithms & Data Structures</li>
          <li>Machine Learning & C++</li>
          <li>Graph Theory & Combinatorics</li>
        </ul>
      </div>
    </div>
  </section>
)
