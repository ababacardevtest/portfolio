export default function Footer(){
    return(
        <footer className="mt-24 border-t border-slate-200 py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm text-slate-500 sm:flex-row">
                <p>© {new Date().getFullYear()} Khalifa Ababacar Diadhiou. Tous droits réservés.</p>
                <p>Développement web freelance</p>
            </div>
        </footer>
    );
}