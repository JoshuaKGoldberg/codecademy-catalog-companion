import React, { useEffect, useState } from "react";

import { PageContainer } from "~/components/PageContainer";

export default function SelfDDOS() {
  const [user, setUser] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch("/api/user").then(async (response) =>
        setUser(await response.json())
      );
    }, 100);
  });

  return (
    <PageContainer title="Problem: Self DDOS 😟">
      <p>
        If you continuously request the same data over and over again, your
        users will end up spamming your services!
      </p>
      <h2>Paths</h2>
      {user ? `Hello, ${user.name}!` : "..."}
    </PageContainer>
  );
}
