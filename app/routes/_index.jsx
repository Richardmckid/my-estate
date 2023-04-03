import AppLayout from "../layouts/appLayout";

export const meta = () => {
  return [{ title: "e-Rental" }];
};

export default function Index() {
  return (
 
    <AppLayout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </AppLayout>
    
  );
}
