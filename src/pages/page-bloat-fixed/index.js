import React, { useEffect, useState } from "react";

import { Card } from "~/components/Card";
import { Grid } from "~/components/Grid";
import { PageContainer } from "~/components/PageContainer";
import { getCourses, getPaths } from "~/data/api";

export default function PageSize({ paths }) {
  const [courses, setCourses] = useState();

  useEffect(() => {
    setTimeout(() => {
      getCourses().then(setCourses);
    }, 3000);
  }, []);

  return (
    <PageContainer title="Problem: Page Bloat">
      <p>
        This page is <em>huge</em>! It has a ton of "card" displays for paths and courses. The JSON
        data used as props is itself pretty massive.
      </p>
      <hr />
      <h2>Paths</h2>
      <Grid>
        {Object.values(paths).map((path) => (
          <Card key={path.name} {...path} />
        ))}
      </Grid>
      <hr />
      <h2>Courses</h2>
      {courses ? (
        <Grid>
          {Object.values(courses).map((course) => (
            <Card key={course.name} {...course} />
          ))}
        </Grid>
      ) : (
        "Loading..."
      )}
    </PageContainer>
  );
}

export async function getServerSideProps() {
  const paths = await getPaths();

  return { props: { paths } };
}
