# /usr/bin/env python
# Download the twilio-python library from twilio.com/docs/libraries/python
from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)

default_reply = "Terima kasih telah menggunakan layanan PADE, layanan yang mempermudah pelayanan keluhan dan penyebaran informasi desa."
default2_reply = "Layanan PADE dapat diakses melalui situs http://arkavidia-pade.herokuapp.com dan SMS ke nomor +14782425971.  Layanan PADE tersedia untuk nomor yang sudah terdaftar. Tarif SMS berlaku sesuai operator telepon."
default3_reply = "Layanan PADE memiliki berbagai kategori. Jika ingin melihat daftar kategori, ketik KATEGORI."
default4_reply = "Jika membutuhkan bantuan, ketik BANTUAN."
default5_reply = "Jika ingin membuat keluhan tentang INFRASTRUKTUR, ketik INFRASTRUKTUR#<ISI>. Contoh: INFRASTRUKTUR#Jalan di depan gang RT 5 bolong dan rusak parah"
default6_reply = "Jika ingin melihat status keluhan, ketik STATUS."
default7_reply = "Jika ingin membuat keluhan tentang LINGKUNGAN HIDUP, ketik LINGKUNGANHIDUP#<ISI>. Contoh: LINGKUNGANHIDUP#Ada pembuangan limbah dari pabrik baru di bagian timur desa"
kategori = "Kategori keluhan yang tersedia: ADMINISTRASI, BANTUANPANGAN, BENCANA, DANADESA, DARURAT, INFORMASIPEMERINTAHAN, INFRASTRUKTUR, JAMINAN SOSIAL, KESEHATAN, KESEJAHTERAANRAKYAT, KOMUNIKASI, LINGKUNGANHIDUP, MUSIBAH, PARIWISATA, PAJAK, PELAYANANBARANG, PELAYANANJASA, PENDIDIKAN, PERBANKAN, PERIZINAN, PERTANIAN, SUMBERDAYAALAM, SITUASIKHUSUS, TEMPATTINGGAL, USAHA, OPSILAINNYA"
salah = "Terima kasih telah menggunakan layanan PADE, saat ini PADE tidak dapat memproses pesan anda."
proses = "Terima kasih telah menggunakan layanan PADE, pesan anda sedang diproses."

@app.route("/sms", methods=['GET', 'POST'])
def sms_reply():
    """Respond to incoming messages with a friendly SMS."""
    # Get the message the user sent our Twilio number
    body = request.values.get('Body', None)

    # Start our response
    resp = MessagingResponse()

#    Determine the right reply for this message
    resp.message(default_reply)
    if body == 'KATEGORI':
        resp.message(kategori)
        resp.message(default4_reply)
        resp.message(default5_reply)
        resp.message(default6_reply)
    elif body == 'BANTUAN':
        resp.message(default2_reply)
        resp.message(default3_reply)
        resp.message(default6_reply)
        resp.message(default5_reply)
        resp.message(default7_reply)
    elif body.split('#')[0] in kategori:
        resp.message(proses)
    else:
        resp.message(salah)
        resp.message(default3_reply)
        resp.message(default4_reply)
        resp.message(default5_reply)
        resp.message(default6_reply)
    return str(resp)

if __name__ == "__main__":
    app.run(debug=True)
