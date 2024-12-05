```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  return {
    props: {
      session: session || null //Explicitly set to null if no session
    },
  };
}

export default function About({ session }) {
  return (
    <div>
      <h1>About Page</h1>
      {session ? (
        <div>
          <p>Logged in as {session.user.email}</p>
          <p>You are authenticated</p>
        </div>
      ) : (
        <p>Not authenticated</p>
      )}
    </div>
  );
}
```