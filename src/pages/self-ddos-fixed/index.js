import React, { useEffect, useState } from "react";

import { PageContainer } from "~/components/PageContainer";

export default function SelfDDOS() {
  const [user, setUser] = useState();

  useEffect(() => {
    if (!user) {
      setTimeout(() => {
        fetch("/api/user").then(async (response) =>
          setUser(await response.json())
        );
      }, 100);
    }
  }, [user]);

  return (
    <PageContainer title="Self DDOS: Fixed 😊">
      <p>
        If you continuously request the same data over and over again, your
        users will end up spamming your services!
      </p>
      <h2>Paths</h2>
      {user ? `Hello, ${user.name}!` : "..."}
    </PageContainer>
  );
}
