// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
let nodemailer = require('nodemailer')


export default function constact(
  req: NextApiRequest,
  res: NextApiResponse
) {


  const smtpTransport = nodemailer.createTransport({
    port: 587,
    host: "smtp-relay.sendinblue.com",
    auth: {
      user: 'info@belshawcleaningservices.com',
      pass: 'OyDHFBRJVfTS5aGM'
    }
  })
  
  const run = async ()=>{
    let sendResult = await smtpTransport.sendMail({
      from: req.body.email,
      to: 'BELSHAW CLEANING SERVICES <info@belshawcleaningservices.com>',
      subject: 'Free Quote Request',
      text: `
          Fullname: ${req.body.fullname}\n,
          Email: ${req.body.email}\n,
          Phone: ${req.body.phone}\n,
          Frequency of Cleaning: ${req.body.frequency}\n,
          Square footage to be cleaned: ${req.body.squarefootage}\n,
          Description: ${req.body.description}\n,
      `,
      html: `
          <table border="1" cellpadding="12">
          <thead>
          <tr>
          <th colspan="2">FREE QUOTE REQUEST</th>
          </tr>
          </thead>
          <tbody>
              <tr>
                  <td>
                  Fullname:
                  </td>
                  <td>
                  ${req.body.fullname}
                  </td>
              </tr>

              <tr>
                  <td>
                  Email:
                  </td>
                  <td>
                  ${req.body.email}
                  </td>
              </tr>

              <tr>
                  <td>
                  Phone:
                  </td>
                  <td>
                  ${req.body.phone}
                  </td>
              </tr>

              <tr>
                  <td>
                  Frequency of Cleaning:
                  </td>
                  <td>
                  ${req.body.frequency}
                  </td>
              </tr>

              <tr>
                  <td>
                  Square footage to be cleaned:
                  </td>
                  <td>
                  ${req.body.squarefootage}
                  </td>
              </tr>

              <tr>
                  <td>
                  Description:
                  </td>
                  <td>
                  ${req.body.description}
                  </td>
              </tr>
          </tbody>
          </table>
      `
    })

    if(sendResult){
      res.status(200).json({ 
        success: true,
        message: 'Message Sent!' 
      })
    }
}

run().catch(err => console.error(err))
  
}
