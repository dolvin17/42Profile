export default function Utility({
  name,
  elemento_dos,
  icon,
}: {
  name: string;
  elemento_dos: string;
  icon?: React.ReactNode;
}) {
  return (
    <>

      <div className="flex gap-32 backdrop-blur-sm bg-emerald-950/80 p-8 justify-between w-1/3">
        <div className="text-lime-400">{name}</div>
        <div className="flex flex-row items-center gap-2">{elemento_dos}{icon}</div>
	</div>
    </>
  );
}
