# /usr/bin/env python
# Download the twilio-python library from twilio.com/docs/libraries/python
from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
import requests

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
kategori_list = ['ADMINISTRASI', 'BANTUANPANGAN', 'BENCANA', 'DANADESA', 'DARURAT', 'INFORMASIPEMERINTAHAN', 'INFRASTRUKTUR', 'JAMINAN SOSIAL', 'KESEHATAN', 'KESEJAHTERAANRAKYAT', 'KOMUNIKASI', 'LINGKUNGANHIDUP', 'MUSIBAH', 'PARIWISATA', 'PAJAK', 'PELAYANANBARANG', 'PELAYANANJASA', 'PENDIDIKAN', 'PERBANKAN', 'PERIZINAN', 'PERTANIAN', 'SUMBERDAYAALAM', 'SITUASIKHUSUS', 'TEMPATTINGGAL', 'USAHA', 'OPSILAINNYA']

@app.route("/sms", methods=['GET', 'POST'])
def sms_reply():
    """Respond to incoming messages with a friendly SMS."""
    # Get the message the user sent our Twilio number
    body = request.values.get('Body', None)

    get_response = requests.get('http://freegeoip.net/json/')
    # Start our response
    resp = MessagingResponse()

#    Determine the right reply for this message
    resp.message(default_reply)
    if body == 'KATEGORI':
        resp.message(
            kategori+'\n'
            +default4_reply+'\n'
            +default5_reply+'\n'
            +default6_reply+'\n'
            )
    elif body == 'BANTUAN':
        resp.message(
            default2_reply+'\n'
            +default3_reply+'\n'
            +default6_reply+'\n'
            +default5_reply+'\n'
            +default7_reply+'\n'
            )

    elif body.split('#')[0] in kategori_list:
        response = create_post(parse_category_to_code(body.split('#')[0]), body.split('#')[1])
        print(response)
        resp.message("diterima")
    else:
        resp.message(
            salah+'\n'
            +default3_reply+'\n'
            +default4_reply+'\n'
            +default5_reply+'\n'
            +default6_reply+'\n'
            )

    return str(resp)

def create_post(cat, isi):
    data = {
        "phone_no": "+17027664886",
        "text": isi,
        "msg_type": "PND",
        "pengaduan_category": cat
        } 
    return requests.post(url = 'https://pade-arkavidia-backend.herokuapp.com/api/add-sms/', data = data)

def parse_category_to_code(cat):
    if cat == "ADMINISTRASI":
        return "ADM"
    elif cat == "BANTUAN PANGAN":
        return "BPN"
    elif cat == "BENCANA":
        return "BCN"
    elif cat == "DANA DESA":
        return "DD"
    elif cat == "DARURAT":
        return "DRT"
    elif cat == "INFORMASI PEMERINTAHAN":
        return "GOV"
    elif cat == "INFRASTRUKTUR":
        return "INF"
    elif cat == "JAMINAN SOSIAL":
        return "JSO"
    elif cat == "KESEHATAN":
        return "KSH"
    elif cat == "KESEJAHTERAAN RAKYAT":
        return "KSR"
    elif cat == "KOMUNIKASI":
        return "KOM"
    elif cat == "LINGKUNGAN HIDUP":
        return "LIH"
    elif cat == "MUSIBAH":
        return "MSB"
    elif cat == "PARIWISATA":
        return "PRW"
    elif cat == "PAJAK":
        return "TAX"
    elif cat == "PELAYANAN BARANG":
        return "PLB"
    elif cat == "PENDIDIKAN":
        return "EDU"
    elif cat == "PERBANKAN":
        return "BNK"
    elif cat == "PERIZINAN":
        return "IZN"
    elif cat == "PERTANIAN":
        return "AGR"
    elif cat == "SUMBER DAYA ALAM":
        return "SDA"
    elif cat == "SITUASI KHUSUS":
        return "STK"
    elif cat == "TEMPAT TINGGAL":
        return "LIV"
    elif cat == "USAHA":
        return "USH"
    elif cat == "LAINNYA":
        return "OTR"
    
if __name__ == "__main__":
    app.run(debug=True)
