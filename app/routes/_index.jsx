import AppLayout from "../layouts/appLayout";
import Container from "../layouts/container";

export const meta = () => {
  return [{ title: "e-Rental" }];
};

export default function Index() {
  return (
 
    <AppLayout>
      <Container>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Container>
    </AppLayout>
    
  );
}
