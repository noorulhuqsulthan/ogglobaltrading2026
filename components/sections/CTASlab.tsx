import Link from 'next/link';

export default function CTASlab() {
  return (
    <section className="slab">
      <div className="wrap slab-in">
        <div>
          <h3 data-r="m">Let&apos;s discuss<br />your requirement.</h3>
          <p data-r style={{ ['--d' as string]: '100ms' }}>
            Looking for gas equipment, fire protection products, industrial equipment
            or Oil &amp; Gas IoT solutions? Tell us the application and specification —
            we&apos;ll identify suitable products and come back to you.
          </p>
        </div>
        <Link className="btn solid" href="/contact" data-r style={{ ['--d' as string]: '160ms' }}>
          <i />
          Send an enquiry
        </Link>
      </div>
    </section>
  );
}