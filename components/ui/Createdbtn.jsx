import { Button } from '@shadcn/ui';

export default function CustomButton({ children, onClick }) {
  return (
    <Button className="bg-green-500 text-white hover:bg-green-600" onClick={onClick}>
      {children}
    </Button>
  );
}
